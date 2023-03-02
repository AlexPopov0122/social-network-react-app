import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a8061e93-9f0e-4624-a327-a7da2a92a889"
    },
    withCredentials: true
})

export const authMe = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
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
    },

    setUserData(userData) {
        return instance.put(`profile`, {...userData})
    },

    updateAvatar(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(response => response.data)
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

export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get("security/get-captcha-url")
    }
}
