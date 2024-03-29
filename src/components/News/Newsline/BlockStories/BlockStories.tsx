import styles from "./BlockStories.module.css"
import Story from "./Story/Story";
import {FC} from "react";

const BlockStories: FC = () => {
    return (
        <div className={styles.blockStories}>
            block stories
            <Story text="story"/>
            <Story text="story 2"/>
            <Story text="story 3"/>
        </div>
    )
};

export default BlockStories;