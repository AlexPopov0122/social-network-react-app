import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (
        <header className={styles.header}>

            {
                // Проверяю авторизован ли пользователь
                (props.isUserAuth && props.userData)
                    ? <>
                        <img src={props.userData.photos.small}/>
                        <div> {props.authUserData.login} </div>
                        <button onClick={props.logout}>logout</button>
                    </>
                    : <NavLink to="/login">Login</NavLink>
            }
        </header>
    )
};

export default Header;
