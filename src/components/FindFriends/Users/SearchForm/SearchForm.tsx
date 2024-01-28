import {FilterType} from "../../../../Redux/RedusersTypes/findFriendsReducerTypes";
import {Field, Form, Formik} from "formik";
import {FC} from "react";

type Props = {
    filter: FilterType
    onFilterChange: (filter: FilterType) => void
}

type FormValuesType = {
    term: string
    friend: "true" | "false" | "null"
}

const SearchForm: FC<Props> = (props) => {
    return <Formik
        enableReinitialize
        initialValues={{ term: props.filter.term, friend: props.filter.friend}}
        validate={values => {
            const errors: {} = {};
            return errors;
        }}
        onSubmit={(values: FilterType | FormValuesType, { setSubmitting }) => {
            let friend;
            if(typeof values.friend !== "string") {
                friend = values.friend
            } else {
                friend = values.friend === "true" ? true : values.friend === "false" ? false : null
            }
            props.onFilterChange({term: values.term, friend: friend})
            setSubmitting(false);
        }}
    >
        {({
              isSubmitting
          }) => (
            <Form >
                <Field
                    type="text"
                    name="term"
                />
                <Field
                    component="select"
                    name="friend"
                >
                    <option value="null">All</option>
                    <option value="true">Followed</option>
                    <option value="false">Unfollowed</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Find
                </button>
            </Form>
        )}
    </Formik>
}

export default SearchForm