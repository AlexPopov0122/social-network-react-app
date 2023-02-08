import Posts from "./Posts/Posts";
import styles from "./Newsline.module.css"
import NewPostContainer from "./NewPost/NewPostContainer";

const Newsline = (props) => {

    let createPosts = props.posts.map((post) => (
        <Posts dataUser={props.store.getState().dataUser} post={post}/>
    ))

    return (
        <div className={styles.newsLine}>
            <NewPostContainer store={props.store}/>
            {createPosts}
        </div>
    )
};

export default Newsline;
