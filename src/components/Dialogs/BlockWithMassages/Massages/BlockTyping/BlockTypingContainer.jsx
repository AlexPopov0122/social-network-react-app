import {addMassageActionCreator} from "../../../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import BlockTypingReduxForm from "./BlockTyping";

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
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMassageActionCreator: (id, NewMassageText) => {
            dispatch(addMassageActionCreator(id, NewMassageText))
        }
    }
}

const BlockTypingContainer = connect(mapStateToProps, mapDispatchToProps)(BlockTypingReduxForm);
export default BlockTypingContainer;