import Advertising from "./Advertising/Advertising";
import Newsline from "./Newsline/Newsline";
import styles from "./Profile.module.css"
import ProfileBlock from "./ProfileBlock/ProfileBlock";

const Profile = (props) => {
    return (
        <div className={styles.mainContent}>
            <ProfileBlock dataUser={props.dataUser}/>
            <Newsline dataUser={props.dataUser} posts={props.profilePage.posts}
                      NewPostText={props.profilePage.NewPostText}
                      dispatch={props.dispatch}/>
            <Advertising/>
        </div>
    );
};

export default Profile;
