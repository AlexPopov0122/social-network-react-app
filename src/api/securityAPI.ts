import {ApiT, instance} from "./api";

export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get("security/get-captcha-url").then(res => res.data as {url: string})
    }
}