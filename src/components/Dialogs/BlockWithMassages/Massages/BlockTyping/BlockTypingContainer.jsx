import {connect} from "react-redux";
import BlockTyping from "./BlockTyping";
import {addMassageActionCreator} from "../../../../../Redux/Reducers/dialogs-reducer.ts";

// const BlockTypingContainer = (props) => {
//
//     let submitMassage = (id) => {
//         let action = addMassageActionCreator(id);
//         props.store.dispatch(action)
//     }
//
//     let onChangeInput = (text) => {
//         let action = changeMassageActionCreator(text);
//         props.store.dispatch(action)
//     }
//
//     return <BlockTyping addMassageActionCreator={submitMassage}
//                         changeMassageActionCreator={onChangeInput}
//                         NewMassageText={props.store.getState().dialogsPage.NewMassageText}
//                         userId={props.userId}/>
// }

const mapStateToProps = (state, props) => {
    return {
        userId: props.userId,
        dialogsPage: state.dialogsPage,
        userName: state.authUserData.login,
        avatar: state.authUserData.userData.photos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMassageActionCreator: (id, NewMassageText) => {
            dispatch(addMassageActionCreator(id, NewMassageText))
        }
    }
}

const BlockTypingContainer = connect(mapStateToProps, mapDispatchToProps)(BlockTyping);
export default BlockTypingContainer;