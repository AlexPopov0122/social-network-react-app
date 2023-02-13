import styles from "./ProfileBlock.module.css";

let ProfileBlock = (props) => {
    return (
        <div className={styles.profileBlock}>
            <div className={styles.imageFon}>
                <img src="http://uitheme.net/sociala/images/u-bg.jpg" alt="Fon"/>
            </div>

            <div className={styles.blockUserName}>
                <div className={styles.avatarUser}>
                    <img src={props.userData.photos.small} alt="avatar"/>
                </div>
                <div className={styles.userName}>
                    <div className={styles.name}>{props.userData.fullName}</div>
                    <div className={styles.email}>{props.userData.vk}</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileBlock;