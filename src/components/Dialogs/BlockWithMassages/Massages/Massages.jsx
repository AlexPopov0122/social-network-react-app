import styles from "./Massages.module.css";
import Message from "./Massage/Massage";
import BlockTypingContainer from "./BlockTyping/BlockTypingContainer";

const Massages = (props) => {

    let massagesCreate = props.massages.map((massage) => (
        <Message massage={massage}/>
    ));
    return (
        <div className={styles.massagesProfiles}>
            <div>
                {massagesCreate}
            </div>
            <BlockTypingContainer store={props.store} userId={props.userId}/>
        </div>
    )
}

export default Massages;