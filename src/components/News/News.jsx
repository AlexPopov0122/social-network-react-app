import Advertising from "./Advertising/Advertising";
import styles from "./News.module.css"
import Newsline from "./Newsline/Newsline";

const News = () => {
    return (
        <div className={styles.mainContent}>
            <Newsline/>
            <Advertising/>
        </div>
    );
};

export default News;
