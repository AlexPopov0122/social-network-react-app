import {connect} from "react-redux";
import ProfileUser from "./ProfileUser";
import React, {ComponentType, FC, useEffect} from "react";
import {
    actionsProfile,
    getUserProfile,
    getUserStatus,
    setUserData,
    updateAvatar,
    updateUserStatus
} from "../../Redux/Reducers/profile-reducer";
import Fetching from "../Fetching/Fetching";
import WithRouter from "../WithRouter/WithRouter";
import withAuthRedirect from "../withAuthRedirect/withAuthRedirect";
import {compose} from "redux";
import {TState} from "../../Redux/Reducers/redux-store";
import {NavigateFunction} from "react-router-dom";
import {DataSubmitProfileBF} from "./Advertising/ProfileBlockForm";
import {UserDataType} from "../../Redux/RedusersTypes/authReducerTypes";

export type withRouterProps = {
    router: {
        location: Location;
        navigate: NavigateFunction;
        params: Record<"userId", string | undefined>;
    };
}
export type MapStatePropsProfileC = ReturnType<typeof mapStateToProps> & {
    userData: UserDataType
}

export type MapDispatchPropsProfileC = {
    getUserProfile: (userId: string | undefined) => void
    getUserStatus: (userId: string | undefined) => void
    updateUserStatus: (statusText: string) => void
    updateAvatar : (file: File) => void
    setUserData: (userData: DataSubmitProfileBF) => void
    addPostActionCreator: (newPostText: string) => void
}

type Props = MapStatePropsProfileC & MapDispatchPropsProfileC & withRouterProps

const {addPostActionCreator} = actionsProfile;

const Profile: FC<Props> = (props) => {

    useEffect(() => {
        let userId = props.router.params.userId;
        props.getUserProfile(userId);
        props.getUserStatus(userId)
    }, [props.router.params.userId])

    return (<>
            {!props.userData || props.isFetching ?
                <Fetching/> :
                <ProfileUser {...props}/>
            }
        </>
    );
}

const mapStateToProps = (state: TState) => ({
    posts: state.profilePage.posts,
    userData: state.profilePage.userData,
    userId: state.profilePage.userId,
    isFetching: state.profilePage.isFetching,
    userStatus: state.profilePage.userStatus,
})

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile, getUserStatus, updateUserStatus, updateAvatar,
        setUserData, addPostActionCreator
    }),
    WithRouter
)(Profile);
