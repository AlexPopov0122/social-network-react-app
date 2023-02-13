import Advertising from "./Advertising/Advertising";
import Newsline from "./Newsline/Newsline";
import styles from "./ProfileUser.module.css"
import ProfileBlock from "./ProfileBlock/ProfileBlock";

const ProfileUser = (props) => {
    return (
        <div className={styles.mainContent}>
            <ProfileBlock dataUser={props.dataUser} userData={props.userData}/>
            <Newsline posts={props.posts}
                      dataUser={props.dataUser}
                      userData={props.userData}/>
            <Advertising/>
        </div>
    );
}
export default ProfileUser;
