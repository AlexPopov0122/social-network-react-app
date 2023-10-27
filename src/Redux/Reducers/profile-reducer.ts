import {FormAction, stopSubmit} from "redux-form";
import {actionsAuth} from "./auth-reducer";
import {
    InitialState, PostsType
} from "../RedusersTypes/profileReducerTypes";
import {PhotosType, UserDataType} from "../RedusersTypes/authReducerTypes";
import {ActionsTypes, BaseThunkType} from "./redux-store";
import {authMe} from "../../api/authMe";
import {profileAPI} from "../../api/profileAPI";

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

const profileReducer = (state = initialState, action: TActionsProfile): InitialState => {
    switch (action.type) {
        case "profile/ADD-POST": {
            const newPost: PostsType = {
                id: 4,
                text: action.newPostText,
                files: [],
                likes: "0",
                comments: "0",
                timePost: "Moment ago"
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case "profile/SET_USER_PROFILE": {
            return {
                ...state,
                userData: action.userData
            }
        }
        case "profile/SET_EDIT_MODE": {
            return {
                ...state,
                editModeProfileBlock: action.editModeProfileBlock
            }
        }
        case "profile/SET_USER_STATUS": {
            return {
                ...state,
                userStatus: action.status
            }
        }
        case "profile/UPDATE_AVATAR_SUCCESS": {
            return {
                ...state,
                userData: {...state.userData, photos: action.photos} as UserDataType
            }
        }
        case "profile/TOGGLE_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "profile/CHANGE_USER_ID":
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state

    }
}

export const actionsProfile = {
    addPostActionCreator: (newPostText: string) => ({type: "profile/ADD-POST", newPostText} as const),
    setUserProfile: (userData: UserDataType) => ({type: "profile/SET_USER_PROFILE", userData} as const),
    setEditMode: (editModeProfileBlock: boolean) => ({type: "profile/SET_EDIT_MODE", editModeProfileBlock} as const),
    setUserStatus: (status: string) => ({type: "profile/SET_USER_STATUS", status} as const),
    toggleFetching: (isFetching: boolean) => ({type: "profile/TOGGLE_FETCHING", isFetching} as const),
    changeUserId: (userId: number | null) => ({type: "profile/CHANGE_USER_ID", userId} as const),
    updateAvatarSuccess: (photos: PhotosType) => ({type: "profile/UPDATE_AVATAR_SUCCESS", photos} as const)
}



export const getUserProfile = (userId: number | null): ThunkType => (dispatch) => {
    if (!userId) {
        authMe.getAuthMe().then(data => {
            userId = data.data.id
            profileAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(actionsAuth.setUserAuthProfile(data))
                    dispatch(actionsProfile.setUserProfile(data))
                    dispatch(actionsProfile.changeUserId(userId))
                    dispatch(actionsProfile.toggleFetching(false))
                })
        })
    } else {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(actionsProfile.setUserProfile(data))
                dispatch(actionsProfile.toggleFetching(false))
            })
    }
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {

    const setStatus = async (userId: number) => {
        const responseStatus = await profileAPI.getUserStatus(userId)
        dispatch(actionsProfile.setUserStatus(responseStatus))
    }

    if (!userId) {
        const responseMe = await authMe.getAuthMe();
        userId = responseMe.data.id
        setStatus(userId)
    } else {
        setStatus(userId)
    }
}

export const updateUserStatus = (status: string): ThunkType => (dispatch) => {
    profileAPI.setUserStatus(status)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(actionsProfile.setUserStatus(status))
            }
        })
}
export const updateAvatar = (photo: string): ThunkType => (dispatch) => {
    profileAPI.updateAvatar(photo)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(actionsProfile.updateAvatarSuccess(response.data.photos))
            }
        })
}

export const setUserData = (userData: UserDataType): ThunkTypeWithForm => (dispatch, getState) => {
    profileAPI.setUserData(userData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(getState().authUserData.id))
                dispatch(actionsProfile.setEditMode(false))
            } else {
                let massage: string = response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "Some error";
                dispatch(stopSubmit("profileBlockForm", {_error: massage}))
            }
        })
}


export type TActionsProfile = ActionsTypes<typeof actionsProfile> | any
type ThunkType = BaseThunkType<TActionsProfile>
type ThunkTypeWithForm = BaseThunkType<TActionsProfile | FormAction>

export default profileReducer;