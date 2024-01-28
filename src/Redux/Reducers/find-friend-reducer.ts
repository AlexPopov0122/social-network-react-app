import {AnyAction, createAsyncThunk, createSlice, Dispatch, PayloadAction, Slice} from "@reduxjs/toolkit";
import {FilterType, InitialStateType} from "../RedusersTypes/findFriendsReducerTypes";
import {UsersAPI} from "../../api/getUsers";
import {followAPI} from "../../api/followAPI";
import {BaseThunkType} from "./redux-store";


export const getUsers = createAsyncThunk(
    "findFriendsReducer/getUsers",
    async ([currentPage, count, filter, isNeedFetching = false]: [number, number, FilterType, boolean?], {rejectWithValue, dispatch}) => {
        if(isNeedFetching) {
            dispatch(toggleFetching({isFetching: true}))
        }
        dispatch(setFilter({filter}))
        dispatch(setCurrentPage({page: currentPage}))
        try {
            const data = await UsersAPI.getUsers(currentPage, count, filter)
            dispatch(setUsers({users: data.items}))
            dispatch(setTotalCount({total: data.totalCount}))
            if(isNeedFetching) {
                dispatch(toggleFetching({isFetching: false}))
            }
            if (data.error) {
                throw new Error("Some error.")
            }

        } catch (error) {
            return rejectWithValue(error)
        }
    });
export const follow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowDisabledStatus({userId, isFetching: true}))
    const data = await followAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollowStatus({userId, followed: true}))
    }
    dispatch(toggleFollowDisabledStatus({userId, isFetching: false}))
};

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowDisabledStatus({userId, isFetching: true}))
    const data = await followAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollowStatus({userId, followed: false}))
    }
    dispatch(toggleFollowDisabledStatus({userId, isFetching: false}))
};

const initialState: InitialStateType = {
    users: [],
    count: 10,
    currentPage: 1,
    totalCountPages: 0,
    isFetching: true,
    disabledFollowButton: [],
    filter: {
        term: "",
        friend: null
    }
};

const findFriendsReducer: Slice<InitialStateType> = createSlice({
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
        },
        setFilter: (state, action) => {
            state.filter = action.payload.filter
        }
    },
    extraReducers: {
        [getUsers.pending as any]: (state, action) => {
            // state.something = "loading";
        },
        [getUsers.fulfilled as any]: (state, action) => {
            // state.something = "resolved";
        },
        [getUsers.rejected as any]: (state, action) => {
            // state.something = "rejected";
            alert(action.payload) // Some error.
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
    setFollowStatus,
    setFilter
} = actions;
type SetUsersT = typeof setUsers
export default reducer;