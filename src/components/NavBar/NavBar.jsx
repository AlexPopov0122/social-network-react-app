import styles from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

let setActive = NavDate => NavDate.isActive ? styles.active : "";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile"
                     className={setActive}>Profile</NavLink>

            <NavLink to="/dialogs"
                     className={setActive}>Messages</NavLink>

            <NavLink to="/news" className={setActive}>News</NavLink>

            <NavLink to="/music" className={setActive}>Music</NavLink>

            <NavLink to="/settings" className={setActive}>Settings</NavLink>
        </nav>
    );
};

export default NavBar;
