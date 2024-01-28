import styles from "../ProfileBlockForm.module.css";
import {Field} from "redux-form";
import {FC} from "react";
import {createField, Textarea} from "../../../FieldControls/FieldControls";
import {DataSubmitProfileBFKeys} from "../ProfileBlockForm";

type Props = {
    socialab: string
    socialabLink: string | null | undefined
}

const ContactsForm: FC<Props> = (props) => {
    return (
        <div className={styles.contact}>
            <span className={styles.contactHeader}>{props.socialab}: </span>
            {/*<span className={styles.socialabLink}>{props.socialabLink}dsf</span>*/}
            <Field className={styles.contactForm} name={"contacts." + props.socialab} component={"input"}/>
        </div>
    )
}

export default ContactsForm;