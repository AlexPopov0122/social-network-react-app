import styles from "./NewPost.module.css"
import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {UserDataType} from "../../../../Redux/RedusersTypes/authReducerTypes";
import {FormValidatorType} from "../../../Login/Login";
import {createField, Input, Textarea} from "../../../FieldControls/FieldControls";

type Props = {
    addPostActionCreator: (newPostText: string) => void
}

type DataSubmit = {
    newPostText: string
}

type TPropsNewPostForm = {
    userData: UserDataType | null | undefined
}

export type DataSubmitNewPostKeys = keyof DataSubmit

const NewPost: FC<Props & TPropsNewPostForm> = (props) => {
    const onSubmit = (dataSubmit: DataSubmit) => {
        props.addPostActionCreator(dataSubmit.newPostText);
        dataSubmit.newPostText = ""
    }
    return (
        <div className={styles.newPost}>
            <div className={styles.previewText}>
                <div className={styles.favicon}></div>
                <div className={styles.text}>Create Post</div>
            </div>
            <NewPostFormRedux userData={props.userData} onSubmit={onSubmit}/>
        </div>
    )
};

const NewPostForm: FC<InjectedFormProps<DataSubmit, TPropsNewPostForm> & TPropsNewPostForm> = (props) => {

    const required: FormValidatorType = value => (value || typeof value === 'number' ? undefined : 'Required')
    // const maxLength = (max: number): FormValidatorType => value =>
    //     value && value.length > max ? `Must be ${max} characters or less` : undefined
    // const maxLength15 = maxLength(300)

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.textInputBlock}>
                {props.userData && <img src={props.userData.photos.small} alt="avatar"/>}
                {createField<DataSubmitNewPostKeys>("What's on your mind?", "newPostText",
                    "text",
                    [required], Textarea, styles.blockTextarea)}
                <div className={styles.addFile}></div>
            </div>
            <button>Create</button>
        </form>
    )
};

const NewPostFormRedux = reduxForm<DataSubmit, TPropsNewPostForm>({
    form: "newPostForm"
})(NewPostForm)

export default connect(null, null)(NewPost);