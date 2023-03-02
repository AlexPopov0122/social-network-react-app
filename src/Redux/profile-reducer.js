import {authMe, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setUserAuthProfile} from "./auth-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const CHANGE_USER_ID = "CHANGE_USER_ID";
const TOGGLE_AUTH = "TOGGLE_AUTH";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_AVATAR_SUCCESS = "UPDATE_AVATAR_SUCCESS";
const SET_EDIT_MODE = "SET_EDIT_MODE";

let initialState = {
    posts: [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
            files: ["https://s1.1zoom.me/b5050/22/343886-sepik_2048x1152.jpg",
                "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-milyh-zhivotnyh-52.jpg",
                "https://fikiwiki.com/uploads/posts/2022-02/1644918604_3-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-3.jpg"],
            likes: "2.8K",
            comments: "122",
            timePost: "3 hour ago"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
            files: ["https://s1.1zoom.me/b5050/22/343886-sepik_2048x1152.jpg",
                "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-milyh-zhivotnyh-52.jpg",
                "https://fikiwiki.com/uploads/posts/2022-02/1644918604_3-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-3.jpg"],
            likes: "2K",
            comments: "10",
            timePost: "30 days ago"
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
            files: ["https://s1.1zoom.me/b5050/22/343886-sepik_2048x1152.jpg",
                "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-milyh-zhivotnyh-52.jpg",
                "https://fikiwiki.com/uploads/posts/2022-02/1644918604_3-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-3.jpg"],
            likes: "968",
            comments: "224",
            timePost: "1 year ago"
        }
    ],
    userData: null,
    userId: null,
    isFetching: true,
    userStatus: "",
    editModeProfileBlock: false
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
        case SET_EDIT_MODE: {
            return {
                ...state,
                editModeProfileBlock: action.editModeProfileBlock
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.status
            }
        }
        case UPDATE_AVATAR_SUCCESS: {
            return {
                ...state,
                userData: {...state.userData, photos: action.photos}
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
export const setEditMode = (editModeProfileBlock) => ({type: SET_EDIT_MODE, editModeProfileBlock});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const changeUserId = (userId) => ({type: CHANGE_USER_ID, userId});
export const updateAvatarSuccess = (photos) => ({type: UPDATE_AVATAR_SUCCESS, photos});

export const getUserProfile = (userId) => (dispatch) => {
    if (!userId) {
        authMe.getAuthMe().then(data => {
            userId = data.data.id
            profileAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(setUserAuthProfile(data))
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

export const getUserStatus = (userId) => async (dispatch) => {

    const setStatus = async (userId) => {
        let responseStatus = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(responseStatus.data))
    }

    if (!userId) {
        let responseMe = await authMe.getAuthMe();
        userId = responseMe.data.id
        setStatus(userId)
    } else {
        setStatus(userId)
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
export const updateAvatar = (photo) => (dispatch) => {
    profileAPI.updateAvatar(photo)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(updateAvatarSuccess(response.data.photos))
            }
        })
}
export const setUserData = (userData) => (dispatch, getState) => {
    profileAPI.setUserData(userData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(getState().authUserData.id))
                dispatch(setEditMode(false))
            } else {
                let massage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("profileBlockForm", {_error: massage}))
            }
        })
}

export default profileReducer;