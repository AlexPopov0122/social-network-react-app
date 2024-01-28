import styles from "./HeaderPost.module.css";
import {PostsType} from "../../../../../Redux/RedusersTypes/profileReducerTypes";
import {UserDataType} from "../../../../../Redux/RedusersTypes/authReducerTypes";
import {FC} from "react";

type Props = {
    userData: UserDataType | null | undefined
    timePost: string
}

const HeaderPost: FC<Props> = (props) => {
    return (
        <div className={styles.blockUserName}>
            <div className={styles.avatarUser}>
                {props.userData && <img src={props.userData.photos.small} alt="avatar"/>}
            </div>
            <div className={styles.userName}>
                {props.userData && <div className={styles.name}>{props.userData.fullName}</div>}
                <div className={styles.dateTime}>{props.timePost}</div>
            </div>
            <div className={styles.moreInfo}>&#8226;&#8226;&#8226;</div>
        </div>
    )
}


export default HeaderPost;