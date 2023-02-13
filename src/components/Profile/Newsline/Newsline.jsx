import Posts from "./Posts/Posts";
import styles from "./Newsline.module.css"
import NewPostContainer from "./NewPost/NewPostContainer";

const Newsline = (props) => {

    let createPosts = props.posts.map((post, i) => (
        <Posts dataUser={props.dataUser} key={i} post={post}/>
    ))

    return (
        <div className={styles.newsLine}>
            <NewPostContainer/>
            {createPosts}
        </div>
    )
};

export default Newsline;
