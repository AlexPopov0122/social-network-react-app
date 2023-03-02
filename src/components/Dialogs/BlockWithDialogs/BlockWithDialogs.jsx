import Dialog from "./Dialog/Dialog";
import styles from "./BlockWithDialogs.module.css";


const BlockWithDialogs = (props) => {
    return (<div className={styles.BlockContentDialogs}>
        {props.dataUsersDialogs.map(companion => (
            <Dialog id={companion.id} companionName={companion.companionName}
                    avatarCompanion={companion.avatarCompanion} key={companion.id}/>
        ))}

    </div>)
}

export default BlockWithDialogs;