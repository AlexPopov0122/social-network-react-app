import {addPostActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        NewPostText: state.profilePage.NewPostText,
        dataUser: state.dataUser,
        profile: state.profilePage
    }
}

const NewPostContainer = connect(mapStateToProps, {addPostActionCreator})(NewPost);
export default NewPostContainer;