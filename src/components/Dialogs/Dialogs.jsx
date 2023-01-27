import styles from "./Dialogs.module.css"
import BlockWithDialogs from "./BlockWithDialogs/BlockWithDialogs";
import BlockWithMassages from "./BlockWithMassages/BlockWithMassages";

function Dialogs(props) {
    return (
        <div className={styles.mainContentMassage}>
            <BlockWithDialogs dataUsersDialogs={props.state.dialogsPage.dataUsersDialogs}/>
            <BlockWithMassages dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;