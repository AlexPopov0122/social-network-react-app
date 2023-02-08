import {addMassageActionCreator, changeMassageActionCreator} from "../../../../../Redux/dialogs-reducer";
import BlockTyping from "./BlockTyping";
import {connect} from "react-redux";

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
        NewMassageText: state.dialogsPage.NewMassageText,
        userId: props.userId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMassageActionCreator: (id) => {
            dispatch(addMassageActionCreator(id))
        },
        changeMassageActionCreator: (text) => {
            dispatch(changeMassageActionCreator(text));
        }
    }
}

const BlockTypingContainer = connect(mapStateToProps, mapDispatchToProps)(BlockTyping);
export default BlockTypingContainer;