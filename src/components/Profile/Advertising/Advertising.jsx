import styles from "./Advertising.module.css";
import Contacts from "./Contacts/Contacts";
import ProfileBlockForm from "./ProfileBlockForm";
import {actionsProfile} from "../../../Redux/Reducers/profile-reducer";
import {connect} from "react-redux";


const {setEditMode} = actionsProfile;
const Advertising = (props) => {

    const contacts = Object.keys(props.userData.contacts).map(constact => {
        if (props.userData.contacts[constact]) {
            return <Contacts key={constact} socialabLink={props.userData.contacts[constact]} socialab={constact}/>
        }
    })

    const showEditForm = () => {
        props.setEditMode(true);
    }

    const onSubmitForm = (dataSubmit) => {
        props.setUserData(dataSubmit)
    }

    return (
        <div className={styles.advertising}>
            <button onClick={showEditForm}>Edit</button>
            <div className={styles.aboutMeBlock}>
                <div className={styles.headerAboutMe}>About me</div>
                <div className={styles.aboutMe}>{props.userData.aboutMe}
                </div>
            </div>

            <div className={styles.contacts}>
                {contacts}
            </div>

            <div className={styles.lookingForAJobBlock}>
                <span className={styles.headerlookingForAJob}>Looking for a job: </span>
                <span className={styles.lookingForAJob}>{props.userData.lookingForAJob}</span>

                <div className={styles.lookingForAJobDescriptionBlock}>
                    <div className={styles.lookingForAJobDescriptionHeader}>A job description</div>
                    <div className={styles.lookingForAJobDescription}>{props.userData.lookingForAJobDescription}
                    </div>
                </div>
            </div>

            {props.editModeProfileBlock &&
                <ProfileBlockForm userData={props.userData} onSubmit={onSubmitForm}/>}

        </div>
    )
};

const mapStateToProps = (state) => {
    return {editModeProfileBlock: state.profilePage.editModeProfileBlock}
}

export default connect(mapStateToProps, {setEditMode})(Advertising);