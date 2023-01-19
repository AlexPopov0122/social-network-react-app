import Dialog from "./Dialog/Dialog";
import styles from "./BlockWithDialogs.module.css";

const BlockWithDialogs = () => {
    return (
        <div className={styles.BlockContentDialogs}>
            
            <Dialog userName="Yulia Kharisova"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="1"/>

            <Dialog userName="Dilovar Salokhov"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="2"/>

            <Dialog userName="Tatiana Starchikova"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="3"/>

            <Dialog userName="Nadezhda Zmeykina"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="4"/>

            <Dialog userName="Damir Shulanov"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="5"/>

            <Dialog userName="Tatyana Popova"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="6"/>

            <Dialog userName="Dmitry Ilyin"
                    avatarPersons="http://cdn.onlinewebfonts.com/svg/download_273204.png" numberPerson="7"/>

        </div>
    )
}

export default BlockWithDialogs;