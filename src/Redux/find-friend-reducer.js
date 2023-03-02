import {followAPI, UsersAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: [],
    count: 10,
    currentPage: 1,
    totalCountPages: 0,
    isFetching: true,
    disabledFollowButton: []
};

const findFriendsReducer = createSlice({
    name: "findFriendsReducer",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload.users
        },
        setFollowStatus: (state, action) => {
            state.users.forEach((u, i) => {
                if (u.id === action.payload.userId) {
                    state.users[i].followed = action.payload.followed
                }
            })
        },
        toggleFollowDisabledStatus: (state, action) => {
            state.disabledFollowButton = action.payload.isFetching ?
                [...state.disabledFollowButton, action.payload.userId]
                : [state.disabledFollowButton.filter(dis => dis !== action.payload.userId)]
        },
        setCurrentPage: (state, action) => {
            state.currentPage = +action.payload.page
        },
        setTotalCount: (state, action) => {
            state.totalCountPages = Math.ceil(action.payload.total / state.count)
        },
        toggleFetching: (state, action) => {
            state.isFetching = action.payload.isFetching
        }
    }
})
const {actions, reducer} = findFriendsReducer;
export const {
    setUsers,
    toggleFollowDisabledStatus,
    setCurrentPage,
    setTotalCount,
    toggleFetching,
    setFollowStatus
} = actions;

export const getUsers = (currentPage, count) => async (dispatch) => {
    dispatch(setCurrentPage({page: currentPage}))
    dispatch(toggleFetching({isFetching: true}))
    try {
        const data = await UsersAPI.getUsers(currentPage, count)
        dispatch(toggleFetching({isFetching: false}))
        dispatch(setUsers({users: data.items}))
        dispatch(setTotalCount({total: data.totalCount}))
    } catch (error) {
        //console.log(error)
    }

}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowDisabledStatus({userId, isFetching: true}))
    const data = await followAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollowStatus({userId, followed: true}))
    }
    dispatch(toggleFollowDisabledStatus({userId, isFetching: false}))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowDisabledStatus({userId, isFetching: true}))
    const data = await followAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollowStatus({userId, followed: false}))
    }
    dispatch(toggleFollowDisabledStatus({userId, isFetching: false}))
}
export default reducer;


/*import {followAPI, UsersAPI} from "../api/api";
import {createAction} from "@reduxjs/toolkit";

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
                users: action.payload.users
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
                    if (u.id === action.payload.userId) {
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
export const setUsers = createAction(SET_USERS, (users) => {
    return {
        payload: {
            users
        }
    }
});
export const followAccept = createAction(FOLLOW);
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
                dispatch(followAccept({userId}))
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

export default findFriendsReducer;*/