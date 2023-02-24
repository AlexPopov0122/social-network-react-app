import styles from "./FieldControls.module.css";

const CreateInput = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div className={styles.input + " " + (hasError ? styles.error : "")}>
                {props.children}
            </div>
            {hasError && <div className={styles.errorText}>{props.meta.error}</div>}
        </div>
    )
}

export const Input = (props) => {
    const {meta, ...dataForTeg} = props
    const {input, ...attributes} = dataForTeg
    return (
        <CreateInput {...props}> <input {...attributes} {...input}/> </CreateInput>
    )
}

export const Textarea = (props) => {
    const {meta, ...dataForTeg} = props
    const {input, ...attributes} = dataForTeg
    return (
        <CreateInput {...props}> <textarea {...attributes} {...input}/> </CreateInput>
    )
}