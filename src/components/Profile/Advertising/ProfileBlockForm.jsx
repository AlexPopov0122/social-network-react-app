import styles from "./ProfileBlockForm.module.css";
import {Field, reduxForm} from "redux-form";
import ContactsForm from "./Contacts/ContactsForm";
import {connect} from "react-redux";

const ProfileBlockForm = (props) => {

    const contacts = Object.keys(props.userData.contacts).map(constact => {
        return <ContactsForm key={constact} socialabLink={props.userData.contacts[constact]} socialab={constact}/>
    })


    return (
        <form className={styles.profileBlockForm} onSubmit={props.handleSubmit}>

            <div className={styles.fullNameBlock}>
                <span className={styles.headerFullName}>Full name: </span>
                <Field name={"fullName"} component={"input"}/>
            </div>

            <div className={styles.aboutMeBlock}>
                <div className={styles.headerAboutMe}>About me</div>
                <Field name={"aboutMe"} component={"textarea"} className={styles.textariaField}/>
            </div>

            <div className={styles.contactsForm}>
                {contacts}
            </div>

            <div className={styles.lookingForAJobBlock}>
                <span className={styles.headerlookingForAJob}>Looking for a job: </span>
                <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>

                <div className={styles.lookingForAJobDescriptionBlock}>
                    <div className={styles.lookingForAJobDescriptionHeader}>A job description</div>
                    <Field name={"lookingForAJobDescription"} component={"textarea"} className={styles.textariaField}
                           value={props.userData.lookingForAJobDescription}/>
                </div>
            </div>
            {
                props.error && <div className={styles.errorText}>{props.error}</div>
            }
            <button>Save</button>
        </form>
    )
};

let ProfileBlockReduxForm = reduxForm({
    form: "profileBlockForm",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileBlockForm);
ProfileBlockReduxForm = connect(
    (state, ownProps) => {
        return ({
            initialValues: ownProps.userData
        })
    },
    {}
)(ProfileBlockReduxForm)
export default ProfileBlockReduxForm;