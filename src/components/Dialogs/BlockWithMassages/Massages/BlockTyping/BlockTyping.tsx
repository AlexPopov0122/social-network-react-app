import React, {FC} from "react";
import styles from "./BlockTyping.module.css"
import {InjectedFormProps, reduxForm} from "redux-form";
import { MSTPBlockTyping} from "./BlockTypingContainer";
import {AddMassageActionCreator} from "../../../../../Redux/Reducers/dialogs-reducer";
import {createField, Input} from "../../../../FieldControls/FieldControls";

type Props = MSTPBlockTyping & {
    addMassageActionCreator: AddMassageActionCreator
}

type DataSubmit = {
    fieldTyping: string
}

export type DataSubmitBTypingKeys = keyof DataSubmit

const BlockTyping: FC<Props> = (props) => {

    const onSubmit = (dataSubmit: DataSubmit) => {
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

const BlockTypingForm: FC<InjectedFormProps<DataSubmit> & {}> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.writeMassage}>
            {createField<DataSubmitBTypingKeys>("Start typing...", "fieldTyping",
                "text",[], Input, styles.blockTyping, "")}
            <button className={styles.submitMassage}>&#10148;</button>
        </form>
    )
}

const BlockTypingReduxForm = reduxForm<DataSubmit>({
    form: "fieldTypingMassage"
})(BlockTypingForm);

export default BlockTyping;