import styles from "./Massages.module.css";
import Message from "./Massage/Massage";
import BlockTypingContainer from "./BlockTyping/BlockTypingContainer";

const Massages = (props) => {

    let massagesCreate = props.massages.map((massage, i) => (
        <Message massage={massage} key={i}/>
    ));
    return (
        <div className={styles.massagesProfiles}>
            <div>
                {massagesCreate}
            </div>
            <BlockTypingContainer userId={props.userId}/>
        </div>
    )
}

export default Massages;