import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import React, {FC} from "react";
import {connect} from "react-redux";
import {logout} from "../../Redux/Reducers/auth-reducer";
import {TState} from "../../Redux/Reducers/redux-store";

type MapState = ReturnType<typeof mapStateToProps>
type MapDispatch = {
    logout: () => void
}
type Props = MapState & MapDispatch

const Header: FC<Props> = (props) => {
    return (
        <header className={styles.header}>
            {
                // Проверяю авторизован ли пользователь
                (props.isUserAuth && props.userData)
                    ? <div className={styles.headerBody}>
                        <div className={styles.headerAuth}>
                            <img className={styles.headerAvatar} src={props.userData.photos.small} alt="avatar"/>
                            <div className={styles.headerFullName}> {props.userData.fullName} </div>
                        </div>
                        <button onClick={props.logout}>logout</button>
                    </div>
                    : <NavLink to="/login">Login</NavLink>
            }
        </header>
    )
};

const mapStateToProps = (state: TState) => {
    return {
        userData: state.authUserData.userData,
        isUserAuth: state.authUserData.isUserAuth
    }
}

export default connect(mapStateToProps, {logout})(Header);
