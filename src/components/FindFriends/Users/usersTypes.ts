import {UsersType} from "../../../Redux/RedusersTypes/findFriendsReducerTypes";

export type TGeneralFindFriendsContainerMSTP = {
    users: Array<UsersType>
    currentPage: number
    totalCountPages: number
    disabledFollowButton: Array<number>
}

export type TGeneralFindFriendsContainerMDTP = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}