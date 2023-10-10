import {PhotosType, UserDataType} from "./authReducerTypes";
import {
    ADD_POST,
    CHANGE_USER_ID,
    SET_EDIT_MODE,
    SET_USER_PROFILE,
    SET_USER_STATUS,
    TOGGLE_FETCHING, UPDATE_AVATAR_SUCCESS
} from "../Reducers/profile-reducer";

export type InitialState = {
    posts: Array<PostsType>
    userData: UserDataType | null
    userId: number | null
    isFetching: boolean
    userStatus: string
    editModeProfileBlock: boolean
}

type PostsType = {
    id: number,
    text: string,
    files: Array<string>,
    likes: string,
    comments: string,
    timePost: string
}

export type AddPostActionCreatorType = (newPostText: string) => { type: typeof ADD_POST, newPostText: string }
export type SetUserProfileType = (userData: UserDataType) => { type: typeof SET_USER_PROFILE, userData: UserDataType }
export type SetEditModeType = (editModeProfileBlock: boolean) =>
    { type: typeof SET_EDIT_MODE, editModeProfileBlock: boolean }
export type SetUserStatusType = (status: string) => { type: typeof SET_USER_STATUS, status: string }
export type ToggleFetchingType = (isFetching: boolean) => { type: typeof TOGGLE_FETCHING, isFetching: boolean }
export type ChangeUserIdType = (userId: number) => { type: typeof CHANGE_USER_ID, userId: number }
export type UpdateAvatarSuccessType = (photos: PhotosType) => ({ type: typeof UPDATE_AVATAR_SUCCESS, photos: PhotosType });