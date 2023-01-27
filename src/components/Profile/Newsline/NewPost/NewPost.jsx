import styles from "./NewPost.module.css"
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    let onButtonClick = () => {
        const action = addPostActionCreator();
        props.dispatch(action)
    }

    return (
        <div className={styles.newPost}>
            <div className={styles.previewText}>
                <div className={styles.favicon}></div>
                <div className={styles.text}>Create Post</div>
            </div>
            <div className={styles.textInputBlock}>
                <img src={props.dataUser.avatar} alt="avatar"/>
                <textarea placeholder="What's on your mind?" ref={newPostElement} value={props.NewPostText}
                          onChange={onPostChange}/>
                <div className={styles.addFile}></div>
            </div>
            <input type="button" value="Create" onClick={onButtonClick}/>
        </div>
    )
};

export default NewPost;