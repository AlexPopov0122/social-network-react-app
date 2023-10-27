import {createSelector} from "@reduxjs/toolkit";
import {TState} from "../Redux/Reducers/redux-store";
import {UsersType} from "../Redux/RedusersTypes/findFriendsReducerTypes";


export const getFoundUsers = (state: TState) => {
    return state.findFriendsPage.users
}
export const getCount = (state: TState) => {
    return state.findFriendsPage.count
}
export const getCurrentPage = (state: TState) => {
    return state.findFriendsPage.currentPage
}
export const getTotalCountPage = (state: TState) => {
    return state.findFriendsPage.totalCountPages
}
export const getIsFetching = (state: TState) => {
    return state.findFriendsPage.isFetching
}
export const getDisabledFollowButton = (state: TState) => {
    return state.findFriendsPage.disabledFollowButton
}

export const getFoundUsersSelector = createSelector(getFoundUsers,
    (users) => {
        return users.filter((el: UsersType) => true)
    })