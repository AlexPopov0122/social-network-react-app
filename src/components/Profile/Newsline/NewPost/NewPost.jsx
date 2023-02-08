import styles from "./NewPost.module.css"
import React from "react";

const NewPost = (props) => {
    let onPostChange = (event) => {
        props.updateNewPostTextActionCreator(event.target.value);
        let text = props.NewPostText;
    }

    let onButtonClick = () => {
        props.addPostActionCreator();
    }
    return (
        <div className={styles.newPost}>
            <div className={styles.previewText}>
                <div className={styles.favicon}></div>
                <div className={styles.text}>Create Post</div>
            </div>
            <div className={styles.textInputBlock}>
                <img src={props.dataUser.avatar} alt="avatar"/>
                <textarea placeholder="What's on your mind?" value={props.NewPostText}
                          onChange={onPostChange}/>
                <div className={styles.addFile}></div>
            </div>
            <input type="button" value="Create" onClick={onButtonClick}/>
        </div>
    )
};

export default NewPost;