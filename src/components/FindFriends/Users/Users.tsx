import React, {FC, useEffect} from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import Paginator from "../../Paginator/Paginator";
import {FilterType} from "../../../Redux/RedusersTypes/findFriendsReducerTypes";
import SearchForm from "./SearchForm/SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCount,
    getCurrentPage,
    getDisabledFollowButton, getFilter,
    getFoundUsersSelector,
    getTotalCountPage
} from "../../../Selectors/find-friends-selectors";
import {follow, getUsers, unfollow} from "../../../Redux/Reducers/find-friend-reducer";
import {useLocation, useNavigate} from "react-router-dom";



export const Users: FC = () => {

    const dispatch: any = useDispatch()

    const navigate = useNavigate()
    const location = useLocation();

    const users = useSelector(getFoundUsersSelector)
    const currentPage = useSelector(getCurrentPage)
    const totalCountPages = useSelector(getTotalCountPage)
    const disabledFollowButton = useSelector(getDisabledFollowButton)
    const filter = useSelector(getFilter)
    const portionUsersCount = useSelector(getCount)
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }
    const onCurrentPageButton = (page: number) => {
        dispatch(getUsers([page, portionUsersCount, filter]))
    }
    const onFilterChange = (filter: FilterType) => {
        dispatch(getUsers([1, portionUsersCount, filter]))
    }

    // Перекидываю query параметры строки браузера в фильтры поиска друзей
    useEffect(() => {
        let actualPage = currentPage
        let actualFilter = filter
        // Достаем query параметры из строки поиска
        const params = new URLSearchParams(location.search)
        const paramTerm = params.get("term")
        const paramFriend = params.get("friend")
        const paramPage = params.get("page")

        if (paramPage !== null) {
            actualPage = Number(paramPage)
        }
        if (paramTerm !== null) {
            actualFilter = { ...actualFilter, term: paramTerm }
        }
        switch (paramFriend) {
            case 'null':
                actualFilter = { ...actualFilter, friend: null }
                break
            case 'true':
                actualFilter = { ...actualFilter, friend: true }
                break
            case 'false':
                actualFilter = { ...actualFilter, friend: false }
                break
        }
        dispatch(getUsers([actualPage, portionUsersCount, actualFilter]))
    }, [])

    // Перекидываю фильтры поиска друзей и текущую страницу в query параметры строки браузера
    useEffect(() => {
        const query: {term?: string, friend?: string, page?: string} = {}
        if(filter.term !== null && filter.term !== "") query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)

        // Переводим объект с query параметрами в строку и добавляем в адресную строку
        const queryToString = new URLSearchParams(query)
        navigate("?" + queryToString.toString())
    }, [filter, currentPage])

    const usersUI = users.map((u: any) => {
        return <User user={u} key={u.id} follow={followUser}
                     unfollow={unfollowUser}
                     disabledFollowButton={disabledFollowButton}/>
    })

    const paginator = <Paginator onCurrentPageButton={onCurrentPageButton}
                               currentPage={currentPage}
                               portionUsersCount={portionUsersCount}
                               totalCountPages={totalCountPages}
                               countPages={10}/>



    return (
        <div className={styles.findFriends}>
            <SearchForm filter={filter} onFilterChange={onFilterChange}/>
            {paginator}
            {usersUI}
            {paginator}
        </div>
    )
}