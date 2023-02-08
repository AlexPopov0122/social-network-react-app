import styles from "./User.module.css";
import avatarDefault from "../../../assets/images/avatar-default-photo.png";

const User = (props) => {

    // let status = props.user.follow ? "Unfollow" : "Follow";
    return (
        <div className={styles.user}>
            <div className={styles.avatar}>
                <img src={props.user.photos.small ? props.user.photos.small : avatarDefault} alt="avatar"/>
            </div>
            <div className={styles.data}>
                <div className={styles.name}>{props.user.name}</div>
                <div className={styles.location}>
                    <span className={styles.country}>{"props.user.country"}</span>|
                    <span className={styles.city}>{"props.user.city"}</span>
                </div>
            </div>
            {
                props.user.follow
                    ? <button type="button" onClick={() => props.unfollow(props.user.id)}
                              className={styles.follow}>Unfollow</button>
                    : <button type="button" onClick={() => props.follow(props.user.id)}
                              className={styles.follow}>Follow</button>
            }
        </div>
    )
}

export default User;