import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../FieldControls/FieldControls";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/Reducers/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "../FieldControls/FieldControls.module.css"
import classNames from "classnames";
import {TState} from "../../Redux/Reducers/redux-store";

type TPropsLogin = TMapState & TMapDispatch
type TPropsLoginForm = {
    captchaUrl: string | null
}

type TDataSubmit = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export type TDataSubmitKeys = keyof TDataSubmit

const Login: FC<TPropsLogin> = (props) => {

    const onSubmit = (dataSubmit: TDataSubmit) => {
        props.login(dataSubmit.email, dataSubmit.password, dataSubmit.rememberMe, dataSubmit.captcha)
    }
    return (
        <>
            {
                props.isUserAuth
                    ? <Navigate to={"/profile"}/>
                    : (<div className={classNames(styles.loginWrapper)}>
                            <div className={styles.loginForm}>
                                <h1>Login</h1>
                                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
                            </div>
                        </div>
                    )
            }
        </>
    )

}

export type FormValidatorType = (value: string) => string | undefined

const LoginForm: FC<InjectedFormProps<TDataSubmit, TPropsLoginForm> & TPropsLoginForm> = (props) => {
    const required = (text: string): FormValidatorType => (value) =>
        (value || typeof value === 'number' ? undefined : text)
    const requiredLogin = required("Enter the email")
    const requiredCaptcha = required("Enter the captcha")
    const requiredPassword = required("Enter the password")
    const maxLength = (max: number): FormValidatorType => (value) =>
        value && value.length > max ? `Must be ${max} characters or less` : undefined
    const maxLength50 = maxLength(50)
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<TDataSubmitKeys>("email", "email",
                "text",
                [requiredLogin], Input, styles.inputField)}
            {createField<TDataSubmitKeys>("password", "password",
                "password", [requiredPassword, maxLength50], Input, styles.inputField)}
            {createField<TDataSubmitKeys>(undefined, "rememberMe",
                "checkbox",[], Input, styles.rememberMeField, "Remember me")}
            {
                props.captchaUrl && <div className={styles.captchaUrlBlock}>
                    <img src={props.captchaUrl} alt="captcha"/>
                    {createField<TDataSubmitKeys>("Input text on image", "captcha",
                    "text",
                    [requiredCaptcha], Input, styles.inputField)}
                </div>
            }
            {
                props.error && <div className={styles.errorText}>{props.error}</div>
            }
            <button>Login</button>
            <p className={styles.testData}>
                <div>Тестовые логин и пароль:</div>
                <div>
                    <div><span>Login:</span> test.accout.2023@gmail.com</div>
                    <div><span>Password:</span> testAccount_2023</div>
                </div>
            </p>

        </form>
    )
}

const LoginReduxForm = reduxForm<TDataSubmit, TPropsLoginForm>({
    form: "loginForm"
})(LoginForm);

type TMapState = {
    isUserAuth: boolean
    captchaUrl: string | null
}
type TMapDispatch = {
    login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

const mapStateToProps = (state: TState): TMapState => {
    return {
        isUserAuth: state.authUserData.isUserAuth,
        captchaUrl: state.authUserData.captchaUrl
    }
}

export default connect(mapStateToProps, {login} as TMapDispatch)(Login);