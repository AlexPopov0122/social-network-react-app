import {ChangeEvent, useEffect, useState} from "react";
import styles from "./Status.module.css";
import {FC} from "react";

type Props = {
    isOwnProfile: boolean
    userStatus: string
    updateUserStatus: (statusText: string) => void
}

const StatusWithUseState: FC<Props> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [statusText, setStatusText] = useState<string>(props.userStatus);

    const activateEditMode = () => {
        props.isOwnProfile && setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(statusText)
    }

    const changeStatus = (value: string) => {
        setStatusText(value)
    }

    useEffect(() => {
        setStatusText(props.userStatus)
    }, [props.userStatus])

    return (
        <div className={styles.status}>
            {
                editMode
                    ? <input onBlur={deactivateEditMode} autoFocus={true} type={"text"}
                             value={statusText}
                             onChange={(e: ChangeEvent<HTMLInputElement>) => changeStatus(e.target.value)}/>
                    : <div
                        onDoubleClick={activateEditMode}>{statusText || "No Status"}</div>
            }
        </div>
    )
}

export default StatusWithUseState;