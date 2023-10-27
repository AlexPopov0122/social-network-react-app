import {instance} from "./api";
import {UsersType} from "../Redux/RedusersTypes/findFriendsReducerTypes";

type UsersApiT = {
    items: Array<UsersType>,
    totalCount: number,
    error: null | string
}

export const UsersAPI = {
    getUsers(page: number, count: number) {
        return instance.get<UsersApiT>(`users?page=${page}&count=${count}`)
            .then(response => response.data)
    }
}