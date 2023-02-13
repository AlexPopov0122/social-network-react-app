import {connect} from "react-redux";
import ProfileUser from "./ProfileUser";
import React from "react";
import axios from "axios";
import {changeUserId, setUserProfile, toggleFetching} from "../../Redux/profile-reducer";
import Fetching from "../Fetching/Fetching";
import WithRouter from "../WithRouter/WithRouter";

class Profile extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.toggleFetching(true)
        if (!userId) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(response => {
                userId = response.data.data.id
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                    .then(response => {
                        this.props.setUserProfile(response.data)
                        this.props.changeUserId(userId)
                        this.props.toggleFetching(false)
                    })
            })
        } else {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data)
                    this.props.toggleFetching(false)
                })
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
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
    isFetching: state.profilePage.isFetching
})

const ProfileContainer = connect(mapStateToProps,
    {setUserProfile, toggleFetching, changeUserId})(WithRouter(Profile))
export default ProfileContainer;
