import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import styles from "./Newsline.module.css"

const Newsline = (props) => {

    let createPosts = props.posts.map((post) => (
        <Posts dataUser={props.dataUser} post={post}/>
    ))

    return (
        <div className={styles.newsLine}>
            <NewPost dataUser={props.dataUser} NewPostText={props.NewPostText}
                     dispatch={props.dispatch}/>
            {createPosts}
        </div>
    )
};

export default Newsline;
