import React from "react";
import styles from "./BlockTyping.module.css"
import {addMassageActionCreator, changeMassageActionCreator} from "../../../../../Redux/dialogs-reducer";

let textInputMassage = React.createRef();

const BlockTyping = (props) => {

    let submitMassage = () => {
        let id = props.userId;
        let action = addMassageActionCreator(id);
        props.dispatch(action)
    }

    let onChangeInput = () => {
        let text = textInputMassage.current.value;
        let action = changeMassageActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={styles.writeMassage}>
            <input type="text" ref={textInputMassage} onChange={onChangeInput} value={props.NewMassageText}
                   className={styles.blockTyping}
                   placeholder="Start typing..."/>
            <input type="button" onClick={submitMassage} className={styles.submitMassage} value="&#10148;"/>
        </div>
    )
}

export default BlockTyping;