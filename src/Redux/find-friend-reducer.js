import {followAPI, UsersAPI} from "../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_COUNT_PAGE = "TOTAL_COUNT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SET_FOLLOW_STATUS = "SET_FOLLOW_STATUS";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const TOGGLE_FOLLOW_DISABLED_STATUS = "TOGGLE_FOLLOW_DISABLED_STATUS";

let initialState = {
    users: [],
    count: 10,
    currentPage: 1,
    totalCountPage: 0,
    isFetching: true,
    disabledFollowButton: []
};

const findFriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: action.followed}
                    }
                    return u
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: +action.page
            }
        case TOTAL_COUNT_PAGE:
            return {
                ...state,
                totalCountPage: action.total / state.count
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW:
            return {
                ...state,
                isSetFollow: action.isSetFollow
            }
        case TOGGLE_FOLLOW_DISABLED_STATUS:
            return {
                ...state,
                disabledFollowButton: action.isFetching ?
                    [...state.disabledFollowButton, action.userId]
                    : [state.disabledFollowButton.filter(dis => dis !== action.userId)]
            }
        default:
            return state;
    }

}
export const setUsers = (users) => ({type: SET_USERS, users});
export const followAccept = (id) => ({type: FOLLOW, userId: id});
export const unfollowAccept = (id) => ({type: UNFOLLOW, userId: id});
export const toggleFollowDisabledStatus = (id, isFetching) => ({
    type: TOGGLE_FOLLOW_DISABLED_STATUS,
    userId: id,
    isFetching
})
export const setCurrentPage = (page) => ({type: CURRENT_PAGE, page});
export const setTotalCount = (total) => ({type: TOTAL_COUNT_PAGE, total});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

export const getUsers = (currentPage, count) => (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    toggleFetching(true)
    UsersAPI.getUsers(currentPage, count)
        .then(data => {
            dispatch(toggleFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowDisabledStatus(userId, true))
    followAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAccept(userId))
            }
            dispatch(toggleFollowDisabledStatus(userId, false))
        })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowDisabledStatus(userId, true))
    followAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAccept(userId))
            }
            dispatch(toggleFollowDisabledStatus(userId, false))
        })
}

export default findFriendsReducer;