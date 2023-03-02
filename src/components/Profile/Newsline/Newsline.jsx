import Posts from "./Posts/Posts";
import styles from "./Newsline.module.css"
import NewPost from "./NewPost/NewPost";

const Newsline = (props) => {

    let createPosts = props.posts.map((post) => (
        <Posts userData={props.userData} key={post.id} post={post}/>
    ))

    return (
        <div className={styles.newsLine}>
            <NewPost userData={props.userData}
                     addPostActionCreator={props.addPostActionCreator}/>
            {createPosts}
        </div>
    )
};

export default Newsline;
