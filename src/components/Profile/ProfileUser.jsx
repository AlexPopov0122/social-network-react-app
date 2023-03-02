import Advertising from "./Advertising/Advertising";
import Newsline from "./Newsline/Newsline";
import styles from "./ProfileUser.module.css"
import ProfileBlock from "./ProfileBlock/ProfileBlock";

const ProfileUser = (props) => {
    return (
        <div className={styles.mainContent}>
            <ProfileBlock userData={props.userData}
                          userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}
                          isOwnProfile={!props.router.params.userId}
                          updateAvatar={props.updateAvatar}/>
            <Newsline posts={props.posts}
                      userData={props.userData}
                      addPostActionCreator={props.addPostActionCreator}/>
            <Advertising userData={props.userData} setUserData={props.setUserData}/>
        </div>
    );
}
export default ProfileUser;
