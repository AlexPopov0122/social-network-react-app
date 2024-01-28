import styles from "./FieldControls.module.css";
import React, {FC} from "react";
import {Field, WrappedFieldMetaProps} from "redux-form";
import {WrappedFieldProps} from "redux-form/lib/Field";
import {FormValidatorType} from "../Login/Login";

type TProps = {
    meta: WrappedFieldMetaProps
    children: React.ReactElement
}

const CreateInput: FC<TProps> = (props) => {
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

export const Input: FC<WrappedFieldProps> = (props) => {
    const {meta, ...dataForTeg} = props
    const {input, ...attributes} = dataForTeg
    return (
        <CreateInput {...props}><input {...attributes} {...input}/></CreateInput>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {meta, ...dataForTeg} = props
    const {input, ...attributes} = dataForTeg
    return (
        <CreateInput {...props}><textarea {...attributes} {...input}/></CreateInput>
    )
}

export function createField<T extends string> (placeholder: string | undefined,
                      name: T,
                      type: string = "text",
                      validators: Array<FormValidatorType>,
                      component: FC<WrappedFieldProps>,
                      className = undefined,
                      text = "", value: any = "hello", props = {}) {
    return <>
        <Field placeholder = {placeholder} name={name} type={type}
               validate={validators} component={component} className = {className}
               value={value} {...props}/> {text}
    </>
}
//createField realisation
{/*<div>*/}
{/*    <Field type={"text"} placeholder={"email"} name={"email"}*/}
{/*           validate={[requiredLogin]}*/}
{/*           className={styles.inputField}*/}
{/*           component={Input}/>*/}
{/*</div>*/}