import styles from "./Dialogs.module.css"
import BlockWithDialogs from "./BlockWithDialogs/BlockWithDialogs";
import BlockWithMassages from "./BlockWithMassages/BlockWithMassages";

function Dialogs() {
    return (
        <div className={styles.mainContentMassage}>
            <BlockWithDialogs/>
            <BlockWithMassages/>
        </div>
    )
}

export default Dialogs;