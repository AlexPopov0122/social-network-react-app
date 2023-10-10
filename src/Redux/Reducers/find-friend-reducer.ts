import {followAPI, UsersAPI} from "../../api/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {InitialStateType} from "../RedusersTypes/findFriendsReducerTypes";


export const getUsers = createAsyncThunk(
    "findFriendsReducer/getUsers",
    async ([currentPage, count]: any, {rejectWithValue, dispatch}) => {
        dispatch(setCurrentPage({page: currentPage}))
        dispatch(toggleFetching({isFetching: true}))
        try {
            const data = await UsersAPI.getUsers(currentPage, count)
            dispatch(toggleFetching({isFetching: false}))
            dispatch(setUsers({users: data.items}))
            dispatch(setTotalCount({total: data.totalCount}))
            if (data.error) {
                throw new Error("Some error.")
            }

        } catch (error) {
            return rejectWithValue(error)
        }

    });
export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowDisabledStatus({userId, isFetching: true}))
    const data = await followAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollowStatus({userId, followed: true}))
    }
    dispatch(toggleFollowDisabledStatus({userId, isFetching: false}))
};

export const unfollow = (userId: number) => async (dispatch: any) => {
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
    setFollowStatus
} = actions;

export default reducer;