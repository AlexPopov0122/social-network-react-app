import styles from "./Massages.module.css";
import Message from "./Massage/Massage";
import BlockTyping from "./BlockTyping/BlockTyping";

const Massages = (props) => {
    let massagesCreate = props.massages.map((massage) => (
        <Message massage={massage}/>
    ));
    return (
        <div className={styles.massagesProfiles}>
            <div>
                {massagesCreate}
            </div>
            <BlockTyping NewMassageText={props.NewMassageText} dispatch={props.dispatch} userId={props.userId}/>
        </div>
    )
}

export default Massages;