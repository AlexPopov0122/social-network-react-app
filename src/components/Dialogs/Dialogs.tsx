import styles from "./Dialogs.module.css"
import BlockWithDialogs from "./BlockWithDialogs/BlockWithDialogs";
import BlockWithMassages from "./BlockWithMassages/BlockWithMassages";
import React, {ComponentType, FC} from "react";
import withAuthRedirect from "../withAuthRedirect/withAuthRedirect";
import {connect} from "react-redux";
import {TState} from "../../Redux/Reducers/redux-store";
import {compose} from "redux";

type Props = ReturnType<typeof mapStateToProps>

const Dialogs: FC<Props> = (props) => (
        <div className={styles.mainContentMassage}>
            <BlockWithDialogs dataUsersDialogs={props.dataUsersDialogs}/>
            <BlockWithMassages usersMassages={props.usersMassages}/>
        </div>
    )

const mapStateToProps = (state: TState) => ({
        dataUsersDialogs: state.dialogsPage.dataUsersDialogs,
        usersMassages: state.dialogsPage.usersMassages
})

const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps),
    withAuthRedirect)(Dialogs)

export default DialogsContainer;