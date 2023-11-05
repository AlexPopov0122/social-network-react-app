import {connect} from "react-redux";
import BlockTyping from "./BlockTyping";
import {addMassageActionCreator} from "../../../../../Redux/Reducers/dialogs-reducer";
import {TState} from "../../../../../Redux/Reducers/redux-store";
import {PhotosType} from "../../../../../Redux/RedusersTypes/authReducerTypes";

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

type Props = {
    userId: number | null
}

export type MSTPBlockTyping = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: TState, props: Props) => {
    let avatar: PhotosType | string = ""
    if (state.authUserData.userData) {
        avatar = state.authUserData.userData.photos
    }
    return {
        userId: props.userId,
        dialogsPage: state.dialogsPage,
        userName: state.authUserData.login,
        avatar: avatar
    }
}

const BlockTypingContainer = connect(mapStateToProps, {addMassageActionCreator})(BlockTyping);
export default BlockTypingContainer;