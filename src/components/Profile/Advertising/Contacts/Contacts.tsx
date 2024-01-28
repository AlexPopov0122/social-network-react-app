import styles from "../Advertising.module.css";
import {FC} from "react";

type Props = {
    socialab: string
    socialabLink: string | null
}

const Contacts: FC<Props> = (props) => {
    return (
        <div className={styles.contact}>
            <span className={styles.contactHeader}>{props.socialab}: </span>
            <span className={styles.socialabLink}>{props.socialabLink}</span>
        </div>
    )
}

export default Contacts;