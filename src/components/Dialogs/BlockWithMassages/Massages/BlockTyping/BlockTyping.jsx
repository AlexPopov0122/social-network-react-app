import React from "react";
import styles from "./BlockTyping.module.css"
import {Field, reduxForm} from "redux-form";

// let textInputMassage = React.createRef();

const BlockTyping = (props) => {

    const onSubmit = (dataSubmit) => {
        props.addMassageActionCreator({
            userId: props.userId, NewMassageText: dataSubmit.fieldTyping,
            userName: props.userName, avatar: props.avatar
        });
        dataSubmit.fieldTyping = ""
    }

    return (
        <div className={styles.writeMassage}>
            <BlockTypingReduxForm {...props} onSubmit={onSubmit}/>
        </div>
    )
}

const BlockTypingForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.writeMassage}>
            <Field type={"text"}
                   className={styles.blockTyping}
                   name={"fieldTyping"}
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