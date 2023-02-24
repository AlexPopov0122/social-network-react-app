import {connect} from "react-redux";
import ProfileUser from "./ProfileUser";
import React from "react";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import Fetching from "../Fetching/Fetching";
import WithRouter from "../WithRouter/WithRouter";
import {withAuthRedirect} from "../withAuthRedirect/withAuthRedirect";
import {compose} from "redux";

class Profile extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        
        return (<>
                {!this.props.userData || this.props.isFetching ?
                    <Fetching/> :
                    <ProfileUser {...this.props}/>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    NewPostText: state.profilePage.NewPostText,
    userData: state.profilePage.userData,
    userId: state.profilePage.userId,
    dataUser: state.dataUser,
    isFetching: state.profilePage.isFetching,
    userStatus: state.profilePage.userStatus
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    WithRouter
)(Profile);

// const ProfileContainer = withAuthRedirect(connect(mapStateToProps,
//     {getUserProfile})(WithRouter(Profile)))
// export default ProfileContainer;
