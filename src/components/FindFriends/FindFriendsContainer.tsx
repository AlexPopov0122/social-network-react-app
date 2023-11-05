import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers
} from "../../Redux/Reducers/find-friend-reducer";
import React, {ComponentType} from "react";
import Users from "./Users/Users";
import Fetching from "../Fetching/Fetching";
import withAuthRedirect from "../withAuthRedirect/withAuthRedirect";
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

type TMapStateToProps = ReturnType<typeof mapStateToProps>

type TMapDispatchToProps = TGeneralFindFriendsContainerMDTP & {
    getUsers: ([currentPage, count]: Array<number>) => void
}

type Props = TMapStateToProps & TMapDispatchToProps

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

export default compose<ComponentType>(
    connect
    // <TMapStateToProps, TMapDispatchToProps>
    (mapStateToProps, {
        follow, unfollow, getUsers
    }),
    withAuthRedirect
    // @ts-ignore
)(FindFriends)