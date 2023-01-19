import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

let setActive = NavDate => NavDate.isActive ? styles.active : "";

function Dialog(props) {
    return (
        <NavLink to={`/dialogs/${props.numberPerson}`} className={setActive}>
            <div className={styles.dialog}>
                <span></span> <img src={props.avatarPersons} alt=""/> {props.userName}
            </div>
        </NavLink>
    )
}

export default Dialog;