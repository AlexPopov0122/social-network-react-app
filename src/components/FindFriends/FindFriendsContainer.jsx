import FindFriends from "./FindFriends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/find-friend-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.findFriendsPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends)

export default FindFriendsContainer;