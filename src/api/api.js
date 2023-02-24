import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "727c08c3-4ed9-43d9-9777-b0641681dc20"
    }
})

export const authMe = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    setUserStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const UsersAPI = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    getFollow(id) {
        return instance.get(`follow/${id}`)
            .then(response => response.data)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

