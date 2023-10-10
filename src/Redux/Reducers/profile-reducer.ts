import {authMe, profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
// @ts-ignore
import {setUserAuthProfile} from "./auth-reducer.ts";
import {
    AddPostActionCreatorType, ChangeUserIdType,
    InitialState,
    SetEditModeType,
    SetUserProfileType, SetUserStatusType, ToggleFetchingType, UpdateAvatarSuccessType
} from "../RedusersTypes/profileReducerTypes";
import {UserDataType} from "../RedusersTypes/authReducerTypes";
import {TState} from "../Reducers/redux-store";

export const ADD_POST: "profile/ADD-POST" = "profile/ADD-POST";
export const SET_USER_PROFILE: "profile/SET_USER_PROFILE" = "profile/SET_USER_PROFILE";
export const TOGGLE_FETCHING: "profile/TOGGLE_FETCHING" = "profile/TOGGLE_FETCHING";
export const CHANGE_USER_ID: "profile/CHANGE_USER_ID" = "profile/CHANGE_USER_ID";
export const TOGGLE_AUTH: "profile/TOGGLE_AUTH" = "profile/TOGGLE_AUTH";
export const SET_USER_STATUS: "profile/SET_USER_STATUS" = "profile/SET_USER_STATUS";
export const UPDATE_AVATAR_SUCCESS: "profile/UPDATE_AVATAR_SUCCESS" = "profile/UPDATE_AVATAR_SUCCESS";
export const SET_EDIT_MODE: "profile/SET_EDIT_MODE" = "profile/SET_EDIT_MODE";

const initialState: InitialState = {
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

const profileReducer = (state = initialState, action: any) => {
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

export const addPostActionCreator: AddPostActionCreatorType = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile: SetUserProfileType = (userData) => ({type: SET_USER_PROFILE, userData});
export const setEditMode: SetEditModeType = (editModeProfileBlock) => ({type: SET_EDIT_MODE, editModeProfileBlock});
export const setUserStatus: SetUserStatusType = (status) => ({type: SET_USER_STATUS, status});
export const toggleFetching: ToggleFetchingType = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const changeUserId: ChangeUserIdType = (userId) => ({type: CHANGE_USER_ID, userId});
export const updateAvatarSuccess: UpdateAvatarSuccessType = (photos) => ({type: UPDATE_AVATAR_SUCCESS, photos});

export const getUserProfile = (userId: number) => (dispatch: any) => {
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

export const getUserStatus = (userId: number) => async (dispatch: any) => {

    const setStatus = async (userId: number) => {
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

export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileAPI.setUserStatus(status)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}
export const updateAvatar = (photo: any) => (dispatch: any) => {
    profileAPI.updateAvatar(photo)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(updateAvatarSuccess(response.data.photos))
            }
        })
}
export const setUserData = (userData: UserDataType) => (dispatch: any, getState: TState) => {
    profileAPI.setUserData(userData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(getState().authUserData.id))
                dispatch(setEditMode(false))
            } else {
                let massage: string = response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "Some error";
                dispatch(stopSubmit("profileBlockForm", {_error: massage}))
            }
        })
}

export default profileReducer;