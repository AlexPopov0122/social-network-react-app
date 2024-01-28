import styles from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import {FC} from "react";

let setActive = (NavDate: any): string => NavDate.isActive ? styles.active : styles.navLinks;

const NavBar: FC = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile"
                     className={setActive}>Profile</NavLink>

            <NavLink to="/dialogs"
                     className={setActive}>Messages</NavLink>
            <NavLink to="/Chat"
                     className={setActive}>Chat</NavLink>

            <NavLink to="/news" className={setActive}>News <span>(in developing)</span> </NavLink>

            <NavLink to="/music" className={setActive}>Music <span>(in developing)</span> </NavLink>

            <NavLink to="/findFriends"
                     className={setActive}>Find friends</NavLink>

            <NavLink to="/settings" className={setActive}>Settings <span>(in developing)</span> </NavLink>
        </nav>
    );
};

export default NavBar;
