import {ApiT, ResultCode, ResultCodeWithCaptcha} from "./api";
import {instance} from "./api";

type TAuthMe = {
    id: number
    email: string
    login: string
}

type TLogin = {
    userId: number
}

export const authMe = {
    getAuthMe() {
        return instance.get<ApiT<TAuthMe>>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false,
          captcha: string | null = null) {
        return instance.post<ApiT<TLogin, ResultCode | ResultCodeWithCaptcha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(data => data.data)
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}