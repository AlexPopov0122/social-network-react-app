const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const CHANGE_USER_ID = "CHANGE_USER_ID";

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
    NewPostText: "",
    userData: null,
    userId: null,
    isFetching: true
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                text: state.NewPostText,
                files: [],
                likes: 0,
                comments: 0,
                timePost: "Moment ago"
            }
            if (/\S+/.test(newPost.text)) {
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    NewPostText: ""
                }
            } else {
                return {
                    ...state,
                    NewPostText: ""
                }
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.NewPostText = action.NewPostText;
            return {
                ...state,
                NewPostText: action.NewPostText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userData: action.userData
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, NewPostText: text});
export const setUserProfile = (userData) => ({type: SET_USER_PROFILE, userData});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const changeUserId = (userId) => ({type: CHANGE_USER_ID, userId});

export default profileReducer;