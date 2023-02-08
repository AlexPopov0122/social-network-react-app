import styles from "./Dialogs.module.css"
import BlockWithDialogs from "./BlockWithDialogs/BlockWithDialogs";
import BlockWithMassages from "./BlockWithMassages/BlockWithMassages";

function Dialogs(props) {
    return (
        <div className={styles.mainContentMassage}>
            <BlockWithDialogs dataUsersDialogs={props.store.getState().dialogsPage.dataUsersDialogs}/>
            <BlockWithMassages store={props.store}
                               usersMassages={props.store.getState().dialogsPage.usersMassages}/>
        </div>
    )
}

export default Dialogs;