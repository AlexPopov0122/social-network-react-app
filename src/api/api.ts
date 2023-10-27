import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a8061e93-9f0e-4624-a327-a7da2a92a889"
    },
    withCredentials: true
})

export type ApiT<T = {}, RC = ResultCode> = {
    data: T
    resultCode: RC
    messages: Array<string>
}

export enum ResultCode {
    Success = 0,
    Error = 1
}
export enum ResultCodeWithCaptcha {
    Captcha = 10
}