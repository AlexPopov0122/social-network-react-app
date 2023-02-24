import styles from "./NewPost.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {
    const onSubmit = (dataSubmit) => {
        props.addPostActionCreator(dataSubmit.newPostText);
    }
    return (
        <div className={styles.newPost}>
            <div className={styles.previewText}>
                <div className={styles.favicon}></div>
                <div className={styles.text}>Create Post</div>
            </div>
            <NewPostFormRedux {...props} onSubmit={onSubmit}/>
        </div>
    )
};

const NewPostForm = (props) => {

    const required = value => (value || typeof value === 'number' ? undefined : 'Required')
    const maxLength = max => value =>
        value && value.length > max ? `Must be ${max} characters or less` : undefined
    const maxLength15 = maxLength(15)

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.textInputBlock}>
                <img src={props.dataUser.avatar} alt="avatar"/>
                <Field placeholder="What's on your mind?" component={"textarea"} name={"newPostText"}
                       validate={[required, maxLength15]}/>
                <div className={styles.addFile}></div>
            </div>
            <button>Create</button>
        </form>
    )
};

const NewPostFormRedux = reduxForm({
    form: "newPostForm"
})(NewPostForm)

export default NewPost;