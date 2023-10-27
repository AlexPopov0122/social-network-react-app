import {UserDataType} from "./authReducerTypes";

export type InitialState = {
    posts: Array<PostsType>
    userData: UserDataType | null | undefined
    userId: number | null
    isFetching: boolean
    userStatus: string
    editModeProfileBlock: boolean
}

export type PostsType = {
    id: number,
    text: string,
    files: Array<string>,
    likes: string,
    comments: string,
    timePost: string
}