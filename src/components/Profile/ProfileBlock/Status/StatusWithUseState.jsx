import {useEffect, useState} from "react";
import styles from "./Status.module.css";

const StatusWithUseState = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatusText] = useState(props.userStatus);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(statusText)
    }

    const changeStatus = (value) => {
        setStatusText(value)
    }

    useEffect(() => {
        setStatusText(props.userStatus)
    }, [props.userStatus])

    return (
        <div className={styles.status}>{props.userData}
            {
                editMode
                    ? <input onBlur={deactivateEditMode} autoFocus={true} type={"text"}
                             value={statusText}
                             onChange={(e) => changeStatus(e.target.value)}/>
                    : <div
                        onDoubleClick={activateEditMode}>{statusText || "No Status"}</div>
            }
        </div>
    )
}

export default StatusWithUseState;