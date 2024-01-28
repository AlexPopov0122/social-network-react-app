import styles from "./ProfileBlockForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import ContactsForm from "./Contacts/ContactsForm";
import {connect} from "react-redux";
import {FC} from "react";
import {ContactsType, UserDataType} from "../../../Redux/RedusersTypes/authReducerTypes";
import {TState} from "../../../Redux/Reducers/redux-store";
import {createField, Input, Textarea} from "../../FieldControls/FieldControls";

export type DataSubmitProfileBF = Omit<UserDataType, "photos" | "userId">

type Props = {
    userData: UserDataType
}

export type DataSubmitProfileBFKeys = keyof DataSubmitProfileBF

const ProfileBlockForm: FC<InjectedFormProps<DataSubmitProfileBF, Props> & Props> = (props) => {

    let contacts
    if(props.userData) {
        contacts = Object.keys(props.userData.contacts).map(contact => {
            return <ContactsForm key={contact}
                                 socialabLink={props.userData.contacts[contact as keyof ContactsType]}
                                 socialab={contact}/>
        })
    }

    return (
        <form className={styles.profileBlockForm} onSubmit={props.handleSubmit}>

            <div className={styles.fullNameBlock}>
                <span className={styles.headerFullName}>Full name: </span>
                {createField<DataSubmitProfileBFKeys>(undefined, "fullName",
                    "text",[], Input)}
            </div>

            <div className={styles.aboutMeBlock}>
                <div className={styles.headerAboutMe}>About me</div>
                {createField<DataSubmitProfileBFKeys>(undefined, "aboutMe",
                    "text",[], Textarea, styles.textariaField)}
            </div>

            <div className={styles.contactsForm}>
                {contacts}
            </div>

            <div className={styles.lookingForAJobBlock}>
                <span className={styles.headerlookingForAJob}>Looking for a job: </span>
                {createField<DataSubmitProfileBFKeys>(undefined, "lookingForAJob",
                    "checkbox",[], Input)}

                <div className={styles.lookingForAJobDescriptionBlock}>
                    <div className={styles.lookingForAJobDescriptionHeader}>A job description</div>
                    {createField<DataSubmitProfileBFKeys>(undefined, "lookingForAJobDescription",
                        "text",[], Textarea, styles.textariaField)}
                </div>
            </div>
            {
                props.error && <div className={styles.errorText}>{props.error}</div>
            }
            <button>Save</button>
        </form>
    )
};


let ProfileBlockReduxForm = reduxForm<DataSubmitProfileBF, Props>({
    form: "profileBlockForm",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileBlockForm);

type OwnProps = {
    userData: UserDataType,
    onSubmit: any //(dataSubmit: UserDataType) => void
}

export default connect(
    (state: TState, ownProps: OwnProps) => {
        return ({
            initialValues: ownProps.userData
        })
    }
)(ProfileBlockReduxForm);