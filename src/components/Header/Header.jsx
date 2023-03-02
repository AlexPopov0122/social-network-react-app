import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (
        <header className={styles.header}>

            {
                // Проверяю авторизован ли пользователь
                (props.isUserAuth && props.userData)
                    ? <div className={styles.headerBody}>
                        <div className={styles.headerAuth}>
                            <img className={styles.headerAvatar} src={props.userData.photos.small}/>
                            <div className={styles.headerFullName}> {props.userData.fullName} </div>
                        </div>
                        <button onClick={props.logout}>logout</button>
                    </div>
                    : <NavLink to="/login">Login</NavLink>
            }
        </header>
    )
};

export default Header;
