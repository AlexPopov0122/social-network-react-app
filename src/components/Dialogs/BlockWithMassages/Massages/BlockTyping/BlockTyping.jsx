import React from "react";
import styles from "./BlockTyping.module.css"
import {Field, reduxForm} from "redux-form";

// let textInputMassage = React.createRef();

const BlockTyping = (props) => {

    const onSubmit = (dataSubmit) => {
        console.log(dataSubmit)
        props.addMassageActionCreator(props.userId, dataSubmit.fieldTypingMassage)
    }

    return (
        <div className={styles.writeMassage}>
            <BlockTypingReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const BlockTypingForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.writeMassage}>
            <Field type={"text"}
                   className={styles.blockTyping}
                   name={"fieldTypingMassage"}
                   placeholder={"Start typing..."}
                   component={"input"}/>
            <button className={styles.submitMassage}>&#10148;</button>
        </form>
    )
}

const BlockTypingReduxForm = reduxForm({
    form: "fieldTypingMassage"
})(BlockTypingForm);

export default BlockTyping;