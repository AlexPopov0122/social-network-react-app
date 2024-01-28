import {instance} from "./api";
import {FilterType, UsersType} from "../Redux/RedusersTypes/findFriendsReducerTypes";

type UsersApiT = {
    items: Array<UsersType>,
    totalCount: number,
    error: null | string
}

export const UsersAPI = {
    getUsers(page: number, count: number, filter: FilterType) {
        return instance.get<UsersApiT>(`users?page=${page}&count=${count}&term=${filter.term}&friend=${filter.friend}`)
            .then(response => response.data)
    }
}