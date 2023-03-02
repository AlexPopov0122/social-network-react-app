import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import Paginator from "../../Paginator/Paginator";

const Users = (props) => {

    const users = props.users.map(u => {
        return <User user={u} key={u.id} follow={props.follow}
                     unfollow={props.unfollow}
                     disabledFollowButton={props.disabledFollowButton}/>
    })

    let paginator = <Paginator onCurrentPageButton={props.onCurrentPageButton}
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