import {connect} from "react-redux";
import {
    setCurrentPage,
    follow,
    setUsers,
    toggleFetching,
    setTotalCount,
    unfollow
} from "../../Redux/find-friend-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users/Users";
import Fetching from "../Fetching/Fetching";
// action creator на смену id
/*import {changeUserId} from "../../Redux/profile-reducer";*/

class FindFriends extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    // action creator на смену id
    /*onUserIdChange(userId) {
        this.props.changeUserId(userId)
    }*/

    onCurrentPageButton(page) {
        this.props.setCurrentPage(page)
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Fetching/> :
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onCurrentPageButton={this.onCurrentPageButton.bind(this)}
                    // action creator на смену id
                    /*onUserIdChange={this.onUserIdChange.bind(this)}*//>
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findFriendsPage.users,
        count: state.findFriendsPage.count,
        currentPage: state.findFriendsPage.currentPage,
        totalCountPage: state.findFriendsPage.totalCountPage,
        isFetching: state.findFriendsPage.isFetching
    }
}

const FindFriendsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleFetching
    // action creator на смену id
    /*changeUserId*/
})(FindFriends)

export default FindFriendsContainer;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(currentPageAC(page))
//         },
//         setTotalCount: (total) => {
//             dispatch(totalCountAC(total))
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//     }
// }

// [
//     {
//         id: 0,
//         userName: "Yulia Kharisova",
//         userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//         follow: false,
//         country: "Russia",
//         city: "Kartaly"
//     }, {
//     id: 1,
//     userName: "Dilovar Salokhov",
//     userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//     follow: false,
//     country: "Russia",
//     city: "Kartaly"
// }, {
//     id: 2,
//     userName: "Tatiana Starchikova",
//     userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//     follow: false,
//     country: "Russia",
//     city: "Kartaly"
// }, {
//     id: 3,
//     userName: "Nadezhda Zmeykina",
//     userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//     follow: false,
//     country: "Russia",
//     city: "Kartaly"
// }, {
//     id: 4,
//     userName: "Damir Shulanov",
//     userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//     follow: false,
//     country: "Russia",
//     city: "Kartaly"
// }, {
//     id: 5,
//     userName: "Tatyana Popova",
//     userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//     follow: false,
//     country: "Russia",
//     city: "Kartaly"
// }, {
//     id: 6,
//     userName: "Dmitry Ilyin",
//     userAvatar: "https://i.imgur.com/vNMhAT4.jpg",
//     follow: false,
//     country: "Russia",
//     city: "Kartaly"
// }
// ]