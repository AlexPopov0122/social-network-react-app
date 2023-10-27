import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers
} from "../../Redux/Reducers/find-friend-reducer";
import React from "react";
import Users from "./Users/Users";
import Fetching from "../Fetching/Fetching";
import {withAuthRedirect} from "../withAuthRedirect/withAuthRedirect";
import {compose} from "redux";
import {
    getCount,
    getCurrentPage, getDisabledFollowButton,
    getFoundUsersSelector,
    getIsFetching,
    getTotalCountPage
} from "../../Selectors/find-friends-selectors";
import {TState} from "../../Redux/Reducers/redux-store";
import {
    TGeneralFindFriendsContainerMSTP, TGeneralFindFriendsContainerMDTP
} from "./Users/usersTypes";

type Props = TMapStateToProps & TMapDispatchToProps

type TMapStateToProps = TGeneralFindFriendsContainerMSTP & {
    isFetching: boolean
    count: number
}

type TMapDispatchToProps = TGeneralFindFriendsContainerMDTP & {
    getUsers: ([currentPage, count]: Array<number>) => void
}

class FindFriends extends React.Component<Props> {

    componentDidMount() {
        this.props.getUsers([this.props.currentPage, this.props.count])
    }

    onCurrentPageButton(page: number): void {
        this.props.getUsers([page, this.props.count])
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
                       disabledFollowButton={this.props.disabledFollowButton}
                       portionUsersCount={this.props.count}
                       totalCountPages={this.props.totalCountPages}/>
            }
        </>
    }
}

const mapStateToProps = (state: TState) => {
    return {
        users: getFoundUsersSelector(state),
        count: getCount(state),
        currentPage: getCurrentPage(state),
        totalCountPages: getTotalCountPage(state),
        isFetching: getIsFetching(state),
        disabledFollowButton: getDisabledFollowButton(state)
    }
}

export default compose(
    connect<TMapStateToProps, TMapDispatchToProps>
    // @ts-ignore
    (mapStateToProps, {
        follow, unfollow, getUsers
    }),
    withAuthRedirect
    // @ts-ignore
)(FindFriends)

// const FindFriendsContainer = withAuthRedirect(connect(mapStateToProps, {
//     follow, unfollow, getUsers
// })(FindFriends))
// export default FindFriendsContainer;

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