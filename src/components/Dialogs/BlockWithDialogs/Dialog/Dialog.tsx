import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import {FC} from "react";
import {DataUserType} from "../../../../Redux/RedusersTypes/dialogsReduserTypes";

let setActive = (NavDate: any): string => NavDate.isActive ? styles.active : "";

const Dialog: FC<DataUserType> = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={setActive}>
            <div className={styles.dialog}>
                <span></span> <img src={props.avatarCompanion} alt=""/> {props.companionName}
            </div>
        </NavLink>
    )
}

export default Dialog;