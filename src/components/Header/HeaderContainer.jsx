import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setUserAuth, toggleUserAuthBool} from "../../Redux/auth-reducer";
import axios from "axios";
import {changeUserId} from "../../Redux/profile-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUserAuth(response.data.data);
                if (response.data.resultCode === 0) {
                    this.props.toggleUserAuthBool(true)
                } else {
                    this.props.toggleUserAuthBool(false)
                }
            })
    }

    render() {
        return (
            <>
                {!this.props.userData ?
                    <div/> :
                    <Header {...this.props}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.authUserData,
        userData: state.profilePage.userData
    }
}

export default connect(mapStateToProps, {setUserAuth, toggleUserAuthBool, changeUserId})(HeaderContainer);
