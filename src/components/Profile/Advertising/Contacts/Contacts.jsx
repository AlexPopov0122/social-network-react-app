import styles from "../Advertising.module.css";

const Contacts = (props) => {
    return (
        <div className={styles.contact}>
            <span className={styles.contactHeader}>{props.socialab}: </span>
            <span className={styles.socialabLink}>{props.socialabLink}</span>
        </div>
    )
}

export default Contacts;