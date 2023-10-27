import React, {FC} from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import Paginator from "../../Paginator/Paginator";
import {TGeneralFindFriendsContainerMDTP, TGeneralFindFriendsContainerMSTP} from "./usersTypes";

type Props = TGeneralFindFriendsContainerMSTP & TGeneralFindFriendsContainerMDTP & {
    onCurrentPageButton: (page: number) => void
    portionUsersCount: number
}

const Users: FC<Props> = (props) => {

    const users = props.users.map((u: any) => {
        return <User user={u} key={u.id} follow={props.follow}
                     unfollow={props.unfollow}
                     disabledFollowButton={props.disabledFollowButton}/>
    })

    const paginator = <Paginator onCurrentPageButton={props.onCurrentPageButton}
                               currentPage={props.currentPage}
                               portionUsersCount={props.portionUsersCount}
                               totalCountPages={props.totalCountPages}
                               countPages={10}/>

    return (
        <div className={styles.findFriends}>
            {paginator}
            {users}
            {paginator}
        </div>
    )
}

export default Users;