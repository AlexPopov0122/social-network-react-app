import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuthMe, logout} from "../../Redux/auth-reducer";
import {getUserProfile} from "../../Redux/profile-reducer";

class HeaderContainer extends React.Component {
    
    render() {
        return (
            <Header {...this.props} onLogoutButtonClick={this.onLogoutButtonClick}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.authUserData,
        userData: state.profilePage.userData,
        isUserAuth: state.authUserData.isUserAuth
    }
}

export default connect(mapStateToProps, {getAuthMe, getUserProfile, logout})(HeaderContainer);
