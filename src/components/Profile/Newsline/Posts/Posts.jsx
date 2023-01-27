import styles from "./Posts.module.css"
import HeaderPost from "./HeaderPost/HeaderPost";
import BodyPost from "./BodyPost/BodyPost";
import Instruments from "./Instruments/Instruments";

const Posts = (props) => {
    return (
        <div className={styles.blockPost}>
            <HeaderPost dataUser={props.dataUser} timePost={props.post.timePost}/>
            <BodyPost textPost={props.post.text} files={props.post.files}/>
            <Instruments numberOfLikes={props.post.likes} numberOfComments={props.post.comments}/>
        </div>
    )
};

export default Posts;