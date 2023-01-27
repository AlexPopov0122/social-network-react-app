import styles from "./Instruments.module.css";

const Instruments = (props) => {
    return (
        <div className={styles.instruments}>
            <div className={styles.likes}>
                <div className={styles.heart}>&#10084;</div>
                <div className={styles.numberOfLikes}>{props.numberOfLikes} Likes</div>
            </div>
            <div className={styles.comments}>
                <div className={styles.commentFavicon}></div>
                <div className={styles.numberOfComments}>{props.numberOfComments} Comments</div>
            </div>
            <div className={styles.share}>
                <div className={styles.shareFavicon}></div>
                <div>Share</div>
            </div>
        </div>
    )
}

export default Instruments;