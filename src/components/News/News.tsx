import Advertising from "./Advertising/Advertising";
import styles from "./News.module.css"
import Newsline from "./Newsline/Newsline";
import {FC} from "react";

const News: FC = () => {
    return (
        <div className={styles.mainContent}>
            <Newsline/>
            <Advertising/>
        </div>
    );
};

export default News;
