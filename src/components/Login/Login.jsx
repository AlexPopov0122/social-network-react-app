import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FieldControls/FieldControls";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "../FieldControls/FieldControls.module.css"
import classNames from "classnames";

const Login = (props) => {

    const onSubmit = (dataSubmit) => {
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

const LoginForm = (props) => {
    const required = text => value => (value || typeof value === 'number' ? undefined : text)
    const requiredLogin = required("Enter the email")
    const requiredCaptcha = required("Enter the captcha")
    const requiredPassword = required("Enter the password")
    const maxLength = max => value =>
        value && value.length > max ? `Must be ${max} characters or less` : undefined
    const maxLength50 = maxLength(50)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} placeholder={"email"} name={"email"}
                       validate={[requiredLogin]}
                       className={styles.inputField}
                       component={Input}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"password"} name={"password"}
                       className={styles.inputField}
                       validate={[requiredPassword, maxLength50]}
                       component={Input}/>
            </div>
            <div className={styles.rememberMeField}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                <span>Remember me</span>
            </div>
            {
                props.captchaUrl && <div className={styles.captchaUrlBlock}>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <div><Field placeholder={"Input text on image"} name={"captcha"}
                                validate={[requiredCaptcha]}
                                component={Input}/></div>
                </div>
            }
            {
                props.error && <div className={styles.errorText}>{props.error}</div>
            }
            <button>Login</button>
            <p className={styles.testData}>
                <div>Тестовые логин и пароль:</div>
                <div>
                    <div><span>Login:</span> free@samuraijs.com</div>
                    <div><span>Password:</span> free</div>
                </div>
            </p>

        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "loginForm"
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isUserAuth: state.authUserData.isUserAuth,
        captchaUrl: state.authUserData.captchaUrl
    }
}

export default connect(mapStateToProps, {login, logout})(Login);