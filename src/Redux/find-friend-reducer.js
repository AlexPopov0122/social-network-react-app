const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_COUNT_PAGE = "TOTAL_COUNT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
    users: [],
    count: 10,
    currentPage: 1,
    totalCountPage: 0,
    isFetching: true
};

const findFriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
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
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: +action.page
            }
        case TOTAL_COUNT_PAGE:
            return {
                ...state,
                totalCountPage: action.total / state.count
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }

}
export const setUsers = (users) => ({type: SET_USERS, users});
export const follow = (id) => ({type: FOLLOW, userId: id});
export const unfollow = (id) => ({type: UNFOLLOW, userId: id});
export const setCurrentPage = (page) => ({type: CURRENT_PAGE, page});
export const setTotalCount = (total) => ({type: TOTAL_COUNT_PAGE, total});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

export default findFriendsReducer;