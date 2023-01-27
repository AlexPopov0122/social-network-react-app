import styles from "./BodyPost.module.css"

const BodyPost = (props) => {

    let createFiles = props.files.map((file) => (
        <img src={file} alt="imagePost"/>
    ))

    return (
        <div className={styles.bodyPost}>
            <div className={styles.textPost}>
                {props.textPost}
            </div>
            <div className={styles.blockFiles}>
                {createFiles}
            </div>
        </div>
    )
}

export default BodyPost;