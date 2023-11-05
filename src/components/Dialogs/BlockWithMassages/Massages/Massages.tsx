import styles from "./Massages.module.css";
import Message from "./Massage/Massage";
import BlockTypingContainer from "./BlockTyping/BlockTypingContainer";
import {UserMassagesType} from "../../../../Redux/RedusersTypes/dialogsReduserTypes";
import {FC} from "react";

const Massages: FC<UserMassagesType> = (props) => {

    let massagesCreate = props.massages.map((massage, i) => (
        <Message massage={massage} key={i}/>
    ));
    return (
        <div className={styles.massagesProfiles}>
            <div>
                {massagesCreate}
            </div>
            <BlockTypingContainer userId={props.id}/>
        </div>
    )
}

export default Massages;