import styles from "./Story.module.css"
import {FC} from "react";

type Props = {
    text: string
}
const Story: FC<Props> = (props) => {
    return (
        <div className={styles.blockStory}>
            {props.text}
        </div>
    )
}

export default Story;