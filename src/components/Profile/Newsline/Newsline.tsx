import Posts from "./Posts/Posts";
import styles from "./Newsline.module.css"
import NewPost from "./NewPost/NewPost";
import {PostsType} from "../../../Redux/RedusersTypes/profileReducerTypes";
import {UserDataType} from "../../../Redux/RedusersTypes/authReducerTypes";
import {FC} from "react";

type Props = {
    posts: Array<PostsType>
    userData: UserDataType | null | undefined
    addPostActionCreator: (newPostText: string) => void
}

const Newsline: FC<Props> = (props) => {

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
