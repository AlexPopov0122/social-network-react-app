import {authMe, profileAPI, SecurityAPI} from "../api/api";
import {changeUserId, setUserProfile} from "./profile-reducer";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = "SET_USER_AUTH";
const SET_INITIAL = "SET_INITIAL";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const SET_USER_AUTH_PROFILE = "SET_USER_AUTH_PROFILE";

let initialState = {
    login: null,
    id: null,
    email: null,
    userData: null,
    isUserAuth: false,
    isInitial: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_AUTH:
            return {
                ...state,
                login: action.login,
                id: action.id,
                email: action.email,
                isUserAuth: action.isUserAuth
            }
        case SET_USER_AUTH_PROFILE:
            return {
                ...state,
                userData: action.userData
            }
        case SET_INITIAL:
            return {
                ...state,
                isInitial: true
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }

}
export const setUserAuth = (login, id, email, isUserAuth) => ({type: SET_USER_AUTH, login, id, email, isUserAuth});
export const setUserAuthProfile = (userData) => ({type: SET_USER_AUTH_PROFILE, userData});
export const setInitial = () => ({type: SET_INITIAL});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

export const getAuthMe = () => (dispatch) => {
    authMe.getAuthMe()
        .then(dataMe => {
            if (dataMe.resultCode === 0) {
                profileAPI.getUserProfile(dataMe.data.id)
                    .then(dataProfile => {
                        dispatch(setUserProfile(dataProfile))
                        dispatch(setUserAuthProfile(dataProfile))
                        dispatch(changeUserId(dataMe.data.id))
                        dispatch(setUserAuth(dataMe.data.login, dataMe.data.id, dataMe.data.email, true))
                        dispatch(setInitial())
                    })
            } else {
                dispatch(setUserAuth(null, null, null, false))
                dispatch(setInitial())
            }
        })
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authMe.login(email, password, rememberMe, captcha)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(getAuthMe())
            } else {
                if (data.data.resultCode === 10) {
                    SecurityAPI.getCaptchaUrl()
                        .then(response => {
                            dispatch(setCaptchaUrl(response.data.url))
                        })
                }
                let massage = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
                dispatch(stopSubmit("loginForm", {_error: massage}))
            }
        })
}

export const logout = () => (dispatch) => {
    authMe.logout()
        .then(dispatch(setUserAuth(null, null, null, false)))
}


export default authReducer;