import React from "react";
import styles from "./BlockTyping.module.css"

let textInputMassage = React.createRef();

const BlockTyping = (props) => {

    let submitMassage = () => {
        let id = props.userId;
        props.addMassageActionCreator(id);
    }

    let onChangeInput = () => {
        let text = textInputMassage.current.value;
        props.changeMassageActionCreator(text);
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