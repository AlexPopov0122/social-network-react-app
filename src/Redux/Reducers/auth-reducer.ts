import {ResultCode, ResultCodeWithCaptcha} from "../../api/api";
import {actionsProfile, TActionsProfile} from "./profile-reducer";
import {stopSubmit} from "redux-form";
import {
    InitialStateType, UserDataType
} from "../RedusersTypes/authReducerTypes";
import {ActionsTypes, BaseThunkType} from "./redux-store";
import {authMe} from "../../api/authMe";
import {profileAPI} from "../../api/profileAPI";
import {SecurityAPI} from "../../api/securityAPI";

let initialState: InitialStateType = {
    login: null,
    id: null,
    email: null,
    userData: null,
    isUserAuth: false,
    isInitial: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: TActionsAuth): InitialStateType => {
    switch (action.type) {
        case "authUserData/SET_USER_AUTH":
            return {
                ...state,
                login: action.login,
                id: action.id,
                email: action.email,
                isUserAuth: action.isUserAuth
            }
        case "authUserData/SET_USER_AUTH_PROFILE":
            return {
                ...state,
                userData: action.userData
            }
        case "authUserData/SET_INITIAL":
            return {
                ...state,
                isInitial: true
            }
        case "authUserData/SET_CAPTCHA_URL":
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }

}

export const actionsAuth = {
    setUserAuthProfile:
    (userData: UserDataType | null) => ({type: "authUserData/SET_USER_AUTH_PROFILE", userData} as const),
    setInitial: () => ({type: "authUserData/SET_INITIAL"} as const),
    setCaptchaUrl: (captchaUrl: string) => ({type: "authUserData/SET_CAPTCHA_URL", captchaUrl} as const),
    setUserAuth: (login: string | null, id: number | null, email: string | null, isUserAuth: boolean) => ({
        type: "authUserData/SET_USER_AUTH",
        login,
        id,
        email,
        isUserAuth
    } as const)
}

type ActionsAuthMeTypes = BaseThunkType<TActionsAuth | TActionsProfile>
export const getAuthMe = (): ActionsAuthMeTypes => (dispatch) => {
    authMe.getAuthMe()
        .then(dataMe => {
            if (dataMe.resultCode === ResultCode.Success) {
                profileAPI.getUserProfile(dataMe.data.id)
                    .then(dataProfile => {
                        dispatch(actionsProfile.setUserProfile(dataProfile))
                        dispatch(actionsAuth.setUserAuthProfile(dataProfile))
                        dispatch(actionsProfile.changeUserId(dataMe.data.id))
                        dispatch(actionsAuth.setUserAuth(dataMe.data.login, dataMe.data.id, dataMe.data.email, true))
                        dispatch(actionsAuth.setInitial())
                    })
            } else {
                dispatch(actionsAuth.setUserAuth(null, null, null, false))
                dispatch(actionsAuth.setInitial())
            }
        })
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => (dispatch) => {
    authMe.login(email, password, rememberMe, captcha)
        .then(data => {
            if (data.resultCode === ResultCode.Success) {
                dispatch(getAuthMe())
            } else {
                if (data.resultCode === ResultCodeWithCaptcha.Captcha) {
                    SecurityAPI.getCaptchaUrl()
                        .then(response => {
                            dispatch(actionsAuth.setCaptchaUrl(response.url))
                        })
                }
                let massage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("loginForm", {_error: massage}))
            }
        })
}

export const logout = (): ThunkType => (dispatch) => {
    authMe.logout()
        .then(
            // @ts-ignore
            dispatch(actions.setUserAuth(null, null, null, false))
        )
}

export type TActionsAuth = ActionsTypes<typeof actionsAuth>
type ThunkType = BaseThunkType<TActionsAuth>


export default authReducer;