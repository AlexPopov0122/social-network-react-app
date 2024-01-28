import styles from "./Advertising.module.css";
import Contacts from "./Contacts/Contacts";
import ProfileBlockForm, {DataSubmitProfileBF} from "./ProfileBlockForm";
import {actionsProfile} from "../../../Redux/Reducers/profile-reducer";
import {connect} from "react-redux";
import {FC} from "react";
import {TState} from "../../../Redux/Reducers/redux-store";
import {ContactsType, UserDataType} from "../../../Redux/RedusersTypes/authReducerTypes";

type MapState = {
    editModeProfileBlock: boolean
}
type MapDispatch = {
    setEditMode: (isEdit: boolean) => void
}

type Props = MapState & MapDispatch & {
    userData: UserDataType
    setUserData: (userData: UserDataType) => void
}

const {setEditMode} = actionsProfile;
const Advertising: FC<Props> = (props) => {

    const contacts = Object.keys(props.userData.contacts).map((contact: string) => {
            if (props.userData.contacts[contact as keyof ContactsType]) {
                return <Contacts key={contact}
                                 socialabLink={props.userData.contacts[contact as keyof ContactsType]}
                                 socialab={contact}/>
            }
        })


    const showEditForm = () => {
        props.setEditMode(true);
    }

    const onSubmit = (dataSubmit: UserDataType) => {
        props.setUserData(dataSubmit)
    }


    return (
        <div className={styles.advertising}>
            <button onClick={showEditForm}>Edit</button>
            <div className={styles.aboutMeBlock}>
                <div className={styles.headerAboutMe}>About me</div>
                     <div className={styles.aboutMe}>{props.userData.aboutMe}</div>
            </div>

            <div className={styles.contacts}>
                {contacts}
            </div>

            <div className={styles.lookingForAJobBlock}>
                <span className={styles.headerLookingForAJob}>Looking for a job: </span>
                    <span className={styles.lookingForAJob}>{props.userData.lookingForAJob}</span>
                <div className={styles.lookingForAJobDescriptionBlock}>
                    <div className={styles.lookingForAJobDescriptionHeader}>A job description</div>
                    <div className={styles.lookingForAJobDescription}>{props.userData.lookingForAJobDescription}
                    </div>
                </div>
            </div>

            {props.editModeProfileBlock &&
                <ProfileBlockForm userData = {props.userData} onSubmit={onSubmit}/>}

        </div>
    )
};

const mapStateToProps = (state: TState) => {
    return {editModeProfileBlock: state.profilePage.editModeProfileBlock}
}

export default connect(mapStateToProps, {setEditMode})(Advertising);