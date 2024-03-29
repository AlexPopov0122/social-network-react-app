import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../FieldControls/FieldControls";
import {connect, useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../Redux/Reducers/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "../FieldControls/FieldControls.module.css"
import classNames from "classnames";
import {TState} from "../../Redux/Reducers/redux-store";

type TPropsLoginForm = {
    captchaUrl: string | null
}

type TDataSubmit = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export type DataSubmitLoginKeys = keyof TDataSubmit

const Login: FC = () => {

    const dispatch: any = useDispatch()
    const isUserAuth = useSelector((state: TState) => state.authUserData.isUserAuth)
    const captchaUrl = useSelector((state: TState) => state.authUserData.captchaUrl)

    const onSubmit = (dataSubmit: TDataSubmit) => {
        dispatch(login(dataSubmit.email, dataSubmit.password, dataSubmit.rememberMe, dataSubmit.captcha))
    }
    return (
        <>
            {
                isUserAuth
                    ? <Navigate to={"/profile"}/>
                    : (<div className={classNames(styles.loginWrapper)}>
                            <div className={styles.loginForm}>
                                <h1>Login</h1>
                                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
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
            {createField<DataSubmitLoginKeys>("email", "email",
                "text",
                [requiredLogin], Input, styles.inputField)}
            {createField<DataSubmitLoginKeys>("password", "password",
                "password", [requiredPassword, maxLength50], Input, styles.inputField)}
            {createField<DataSubmitLoginKeys>(undefined, "rememberMe",
                "checkbox",[], Input, styles.rememberMeField, "Remember me")}
            {
                props.captchaUrl && <div className={styles.captchaUrlBlock}>
                    <img src={props.captchaUrl} alt="captcha"/>
                    {createField<DataSubmitLoginKeys>("Input text on image", "captcha",
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

export default Login