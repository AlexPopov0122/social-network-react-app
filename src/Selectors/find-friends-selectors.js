import {createSelector} from "@reduxjs/toolkit";


export const getFoundUsers = (state) => {
    return state.findFriendsPage.users
}
export const getCount = (state) => {
    return state.findFriendsPage.count
}
export const getCurrentPage = (state) => {
    return state.findFriendsPage.currentPage
}
export const getTotalCountPage = (state) => {
    return state.findFriendsPage.totalCountPages
}
export const getIsFetching = (state) => {
    return state.findFriendsPage.isFetching
}
export const getDisabledFollowButton = (state) => {
    return state.findFriendsPage.disabledFollowButton
}

export const getFoundUsersSelector = createSelector(getFoundUsers,
    (users) => {
        return users.filter(el => true)
    })