import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuthMe, logout} from "../../Redux/Reducers/auth-reducer.ts";
import {getUserProfile} from "../../Redux/Reducers/profile-reducer.ts";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} onLogoutButtonClick={this.onLogoutButtonClick}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.authUserData.userData,
        isUserAuth: state.authUserData.isUserAuth
    }
}

export default connect(mapStateToProps, {getAuthMe, getUserProfile, logout})(HeaderContainer);
