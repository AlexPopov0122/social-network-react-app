import styles from "./Massage.module.css";

const Massage = (props) => {
    return (
        <div className={styles.userMassage}>
            <img src={props.massage.avatar} alt="avatar"/> {props.massage.massage}
        </div>
    )
}

export default Massage;