import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {

    const pages = props.users.map((el, index) => {
        return <span onClick={(e) => props.onCurrentPageButton(e.currentTarget.innerText)}
                     key={el.id}
                     className={props.currentPage === index + 1 ? styles.active : ""}>{index + 1}</span>
    })

    const users = props.users.map(u => <User user={u} key={u.id} follow={props.follow}
                                             unfollow={props.unfollow}
        // action creator на смену id
        /*onUserIdChange={props.onUserIdChange}*//>)
    return (
        <div className={styles.findFriends}>
            <div className={styles.pagesCount}>{pages}</div>
            {users}
        </div>
    )
}

export default Users;