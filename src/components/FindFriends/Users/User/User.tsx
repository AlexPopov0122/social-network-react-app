import styles from "./User.module.css";
// @ts-ignore
import avatarDefault from "../../../../assets/images/avatar-default-photo.png";
import {NavLink} from "react-router-dom";
import {FC} from "react";
import {UsersType} from "../../../../Redux/RedusersTypes/findFriendsReducerTypes";
import {TGeneralFindFriendsContainerMDTP} from "../usersTypes";

type Props = TGeneralFindFriendsContainerMDTP & {
    user: UsersType
    disabledFollowButton: Array<number>
}

const User: FC<Props> = (props) => {
    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${props.user.id}`}>
                <div className={styles.avatar}>
                    <img src={props.user.photos.small ? props.user.photos.small : avatarDefault} alt="avatar"/>
                </div>
            </NavLink>
            <div className={styles.data}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <div className={styles.name}>{props.user.name}</div>
                </NavLink>
                <div className={styles.location}>
                    <span className={styles.country}>{"props.user.country"}</span>|
                    <span className={styles.city}>{"props.user.city"}</span>
                </div>
            </div>
            {
                props.user.followed
                    ? <button type="button" disabled={props.disabledFollowButton.some(dis => dis === props.user.id)}
                              onClick={() => {
                                  props.unfollow(props.user.id)
                              }}
                              className={styles.follow}>Unfollow</button>
                    : <button type="button" disabled={props.disabledFollowButton.some(dis => dis === props.user.id)}
                              onClick={() => {
                                  props.follow(props.user.id)
                              }}
                              className={styles.follow}>Follow</button>
            }
        </div>
    )
}

export default User;