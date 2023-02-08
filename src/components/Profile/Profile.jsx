import Advertising from "./Advertising/Advertising";
import Newsline from "./Newsline/Newsline";
import styles from "./Profile.module.css"
import ProfileBlock from "./ProfileBlock/ProfileBlock";

const Profile = (props) => {
    return (
        <div className={styles.mainContent}>
            <ProfileBlock dataUser={props.store.getState().dataUser}/>
            <Newsline store={props.store}
                      posts={props.store.getState().profilePage.posts}/>
            <Advertising/>
        </div>
    );
};

export default Profile;
