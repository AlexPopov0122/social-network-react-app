import {authMe, profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const CHANGE_USER_ID = "CHANGE_USER_ID";
const TOGGLE_AUTH = "TOGGLE_AUTH";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts: [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
            files: ["http://uitheme.net/sociala/images/t-10.jpg",
                "http://uitheme.net/sociala/images/t-11.jpg",
                "http://uitheme.net/sociala/images/t-12.jpg"],
            likes: "2.8K",
            comments: "122",
            timePost: "3 hour ago"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
            files: ["http://uitheme.net/sociala/images/t-10.jpg",
                "http://uitheme.net/sociala/images/t-11.jpg",
                "http://uitheme.net/sociala/images/t-12.jpg"],
            likes: "2K",
            comments: "10",
            timePost: "30 days ago"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
            files: ["http://uitheme.net/sociala/images/t-10.jpg",
                "http://uitheme.net/sociala/images/t-11.jpg",
                "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"],
            likes: "968",
            comments: "224",
            timePost: "1 year ago"
        }
    ],
    userData: null,
    userId: null,
    isFetching: true,
    userStatus: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                text: action.newPostText,
                files: [],
                likes: 0,
                comments: 0,
                timePost: "Moment ago"
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
            // if (/\S+/.test(newPost.text)) {
            //     return {
            //         ...state,
            //         posts: [newPost, ...state.posts],
            //         NewPostText: ""
            //     }
            // } else {
            //     return {
            //         ...state,
            //         NewPostText: ""
            //     }
            // }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userData: action.userData
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.status
            }
        }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case CHANGE_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        case TOGGLE_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (userData) => ({type: SET_USER_PROFILE, userData});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const changeUserId = (userId) => ({type: CHANGE_USER_ID, userId});

export const getUserProfile = (userId) => (dispatch) => {
    if (!userId) {
        authMe.getAuthMe().then(data => {
            userId = data.data.id
            profileAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(setUserProfile(data))
                    dispatch(changeUserId(userId))
                    dispatch(toggleFetching(false))
                })
        })
    } else {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
                dispatch(toggleFetching(false))
            })
    }
}

export const getUserStatus = (userId) => (dispatch) => {
    if (!userId) {
        authMe.getAuthMe().then(data => {
            userId = data.data.id
            profileAPI.getUserStatus(userId)
                .then(data => {
                    dispatch(setUserStatus(data.data))
                })
        })
    } else {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data.data))
            })
    }
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.setUserStatus(status)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profileReducer;