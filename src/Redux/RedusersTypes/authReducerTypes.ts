import {SET_CAPTCHA_URL, SET_INITIAL, SET_USER_AUTH, SET_USER_AUTH_PROFILE} from "../Reducers/auth-reducer";


type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}


export type UserDataType = {
    aboutMe: string | null
    constact: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: PhotosType
}

export type InitialStateType = {
    login: string | null,
    id: number | null,
    email: string | null,
    userData: UserDataType | null,
    isUserAuth: boolean,
    isInitial: boolean,
    captchaUrl: string | null
};

export type SetUserAuthType = (login: string | null, id: number | null, email: string | null, isUserAuth: boolean) =>
    { type: typeof SET_USER_AUTH, login: string | null, id: number | null, email: string | null, isUserAuth: boolean }

export type SetUserAuthProfileType = (userData: UserDataType) =>
    { type: typeof SET_USER_AUTH_PROFILE, userData: UserDataType }
export type SetInitialType = () => { type: typeof SET_INITIAL }
export type SetCaptchaUrlType = (captchaUrl: string) => { type: typeof SET_CAPTCHA_URL, captchaUrl: string }
