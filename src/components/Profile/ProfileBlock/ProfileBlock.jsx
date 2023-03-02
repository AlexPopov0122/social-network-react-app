import styles from "./ProfileBlock.module.css";
import StatusWithUseState from "./Status/StatusWithUseState";
import avatarDefault from "./../../../assets/images/avatar-default-photo.png";

const ProfileBlock = (props) => {

    const onChangeAvatar = (e) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }

    return (
        <div className={styles.profileBlock}>
            <div className={styles.imageFon}>
                <img
                    src="https://funart.pro/uploads/posts/2020-04/1587490151_91-p-krasivie-foni-dlya-profilya-steam-114.jpg"
                    alt="Fon"/>
            </div>

            <div className={styles.blockUserName}>
                <div className={styles.avatarUser}>
                    <img src={props.userData.photos.small || avatarDefault} alt="avatar"/>
                    {
                        props.isOwnProfile && <input onChange={onChangeAvatar} type="file" name="Choose photo"/>
                    }
                </div>
                <div className={styles.userName}>
                    <div className={styles.name}>{props.userData.fullName}</div>
                    <StatusWithUseState userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>

        </div>
    )
}

export default ProfileBlock;