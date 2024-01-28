import styles from "./Posts.module.css"
import HeaderPost from "./HeaderPost/HeaderPost";
import BodyPost from "./BodyPost/BodyPost";
import Instruments from "./Instruments/Instruments";
import {FC} from "react";
import {PostsType} from "../../../../Redux/RedusersTypes/profileReducerTypes";
import {UserDataType} from "../../../../Redux/RedusersTypes/authReducerTypes";

type Props = {
    post: PostsType
    userData: UserDataType | null | undefined
}

const Posts: FC<Props> = (props) => {
    return (
        <div className={styles.blockPost}>
            <HeaderPost userData={props.userData} timePost={props.post.timePost}/>
            <BodyPost textPost={props.post.text} files={props.post.files}/>
            <Instruments numberOfLikes={props.post.likes} numberOfComments={props.post.comments}/>
        </div>
    )
};

export default Posts;