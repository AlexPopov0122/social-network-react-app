import User from "./Friend/User";
import styles from "./FindFriends.module.css";
import axios from "axios";

const FindFriends = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    const users = props.users.map(u => <User user={u} key={u.id} follow={props.follow}
                                             unfollow={props.unfollow}/>)
    return (
        <div className={styles.findFriends}>
            {users}
        </div>
    )
}

export default FindFriends;

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