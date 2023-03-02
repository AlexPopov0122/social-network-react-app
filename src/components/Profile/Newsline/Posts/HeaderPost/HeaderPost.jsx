import styles from "./HeaderPost.module.css";

const HeaderPost = (props) => {
    return (
        <div className={styles.blockUserName}>
            <div className={styles.avatarUser}>
                <img src={props.userData.photos.small} alt="avatar"/>
            </div>
            <div className={styles.userName}>
                <div className={styles.name}>{props.userData.fullName}</div>
                <div className={styles.dateTime}>{props.timePost}</div>
            </div>
            <div className={styles.moreInfo}>&#8226;&#8226;&#8226;</div>
        </div>
    )
}


export default HeaderPost;