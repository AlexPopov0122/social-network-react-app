import {ApiT, instance} from "./api";



export const followAPI = {
    unfollow(id: number) {
        return instance.delete<ApiT>(`follow/${id}`)
            .then(res => res.data)
    },

    follow(id: number) {
        return instance.post<ApiT>(`follow/${id}`)
            .then(res =>  res.data)
    }
}