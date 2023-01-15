import Advertising from "./Advertising/Advertising";
import Newsline from "./Newsline/Newsline";
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.mainContent}>
        <Newsline/>
        <Advertising/>
      </div>
    </div>
  );
};

export default Profile;
