const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: []
};

const findFriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [/*...state.users, */...action.users]
            }
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        // let status;
        // action.userStatus === "Follow" ? status = true : status = false;
        default:
            return state;
    }

}
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const followAC = (id) => ({type: FOLLOW, userId: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, userId: id});

export default findFriendsReducer;