import styles from "./Massage.module.css";
import {FC} from "react";
import {UserMassageType} from "../../../../../Redux/RedusersTypes/dialogsReduserTypes";

type Props = {
    massage: UserMassageType
}

const Massage: FC<Props> = (props) => {
    return (
        <div className={styles.userMassage}>
            <img src={props.massage.avatar} alt="avatar"/> {props.massage.massage}
        </div>
    )
}

export default Massage;