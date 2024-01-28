import styles from "./BodyPost.module.css"
import {FC} from "react";

type Props = {
    textPost: string
    files: Array<string>
}

const BodyPost: FC<Props> = (props) => {

    let createFiles = props.files.map((file, i) => (
        <img key={i} src={file} alt="imagePost"/>
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