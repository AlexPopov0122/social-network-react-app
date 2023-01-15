import BlockStories from "./BlockStories/BlockStories";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import styles from "./Newsline.module.css"

const Newsline = () => {
    return (
        <div className={styles.newsLine}>
        <BlockStories/>
        <NewPost/>
        <Posts/>
        </div>
    )
};

export default Newsline;
