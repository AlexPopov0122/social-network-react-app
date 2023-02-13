import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src={props.userData.photos.small}/>
            <NavLink to="/login">
                {props.authUserData.isUserAuth
                    ? props.authUserData.login
                    : "Login"}
            </NavLink>
        </header>
    )
};

export default Header;
