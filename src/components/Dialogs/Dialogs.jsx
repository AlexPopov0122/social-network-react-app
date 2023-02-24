import styles from "./Dialogs.module.css"
import BlockWithDialogs from "./BlockWithDialogs/BlockWithDialogs";
import BlockWithMassages from "./BlockWithMassages/BlockWithMassages";
import React from "react";
import {withAuthRedirect} from "../withAuthRedirect/withAuthRedirect";
import {connect} from "react-redux";

function Dialogs(props) {
    return (
        <div className={styles.mainContentMassage}>
            <BlockWithDialogs dataUsersDialogs={props.dataUsersDialogs}/>
            <BlockWithMassages usersMassages={props.usersMassages}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataUsersDialogs: state.dialogsPage.dataUsersDialogs,
        usersMassages: state.dialogsPage.usersMassages
    }
}
const DialogsContainer = connect(mapStateToProps, {})(Dialogs)
const withAuthRedirectDialogs = withAuthRedirect(DialogsContainer)

export default withAuthRedirectDialogs;