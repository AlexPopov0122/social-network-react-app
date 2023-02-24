import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FieldControls/FieldControls";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "../FieldControls/FieldControls.module.css"

const Login = (props) => {

    const onSubmit = (dataSubmit) => {
        props.login(dataSubmit.email, dataSubmit.password, dataSubmit.rememberMe)
    }
    return (
        <>
            {
                props.isUserAuth
                    ? <Navigate to={"/profile"}/>
                    : (<div>
                            <h1>Login</h1>
                            <LoginReduxForm onSubmit={onSubmit}/>
                        </div>
                    )
            }
        </>
    )

}

const LoginForm = (props) => {
    const required = text => value => (value || typeof value === 'number' ? undefined : text)
    const requiredLogin = required("Enter the email")
    const requiredPassword = required("Enter the password")
    const maxLength = max => value =>
        value && value.length > max ? `Must be ${max} characters or less` : undefined
    const maxLength50 = maxLength(50)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} placeholder={"email"} name={"email"}
                       validate={[requiredLogin]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"password"} name={"password"}
                       validate={[requiredPassword, maxLength50]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                <span>Remember me</span>
            </div>
            {
                props.error && <div className={styles.errorText}>{props.error}</div>
            }
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "loginForm"
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isUserAuth: state.authUserData.isUserAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);