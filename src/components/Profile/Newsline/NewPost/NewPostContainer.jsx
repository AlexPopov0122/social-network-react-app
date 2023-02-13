import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

// const NewPostContaidner = (props) => {
//
//     const onPostChange = (text) => {
//         const action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action)
//     }
//
//     const onButtonClick = () => {
//         const action = addPostActionCreator();
//         props.store.dispatch(action)
//     }
//
//     return <NewPost updateNewPostTextActionCreator={onPostChange} addPostActionCreator={onButtonClick}
//                     NewPostText={props.store.getState().profilePage.NewPostText}
//                     dataUser={props.store.getState().dataUser}/>
// };

const mapStateToProps = (state) => {
    return {
        NewPostText: state.profilePage.NewPostText,
        dataUser: state.dataUser,
        profile: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextActionCreator: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPostActionCreator: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
export default NewPostContainer;