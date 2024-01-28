import styles from "./ProfileBlock.module.css";
import StatusWithUseState from "./Status/StatusWithUseState";
// @ts-ignore
import avatarDefault from "./../../../assets/images/avatar-default-photo.png";
import {ChangeEvent, FC} from "react";
import {UserDataType} from "../../../Redux/RedusersTypes/authReducerTypes";

type Props = {
    userData: UserDataType | null | undefined
    userStatus: string
    updateUserStatus: (statusText: string) => void
    isOwnProfile: boolean
    updateAvatar : (file: File) => void
}

const ProfileBlock: FC<Props> = (props) => {

    const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
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
                    {
                        props.userData && <img src={props.userData.photos.small || avatarDefault} alt="avatar"/>
                    }
                    {
                        props.isOwnProfile && <input onChange={onChangeAvatar} type="file" name="Choose photo"/>
                    }
                </div>
                <div className={styles.userName}>
                    <div className={styles.name}>
                        {
                            props.userData && props.userData.fullName
                        }
                    </div>
                    <StatusWithUseState isOwnProfile={props.isOwnProfile}
                                        userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>

        </div>
    )
}

export default ProfileBlock;