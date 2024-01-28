import {useDispatch, useSelector} from "react-redux";
import {
    getUsers
} from "../../Redux/Reducers/find-friend-reducer";
import React, {FC, useEffect} from "react";
import {Users} from "./Users/Users";
import Fetching from "../Fetching/Fetching";
import withAuthRedirect from "../withAuthRedirect/withAuthRedirect";
import {
    getCount,
    getCurrentPage, getFilter,
    getIsFetching,
} from "../../Selectors/find-friends-selectors";


const FindFriendsPage: FC = () => {
    const dispatch: any = useDispatch()

    const currentPage = useSelector(getCurrentPage)
    const count = useSelector(getCount)
    const filter = useSelector(getFilter)
    const isFetching = useSelector(getIsFetching)

    useEffect(() => {
        dispatch(getUsers([currentPage, count, filter, true]))
    }, [])

    return <>
        {isFetching ?
            <Fetching/> :
            <Users />
        }
    </>
}

export default withAuthRedirect(FindFriendsPage)