const SET_USER_AUTH = "SET_USER_AUTH";
const TOGGLE_USER_AUTH_BOOL = "TOGGLE_USER_AUTH_BOOL";

let initialState = {
    login: null,
    id: null,
    email: null,
    isUserAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_USER_AUTH_BOOL:
            return {
                ...state,
                isUserAuth: action.isAuth
            }
        default:
            return state;
    }

}
export const setUserAuth = (data) => ({type: SET_USER_AUTH, data});
export const toggleUserAuthBool = (isAuth) => ({type: TOGGLE_USER_AUTH_BOOL, isAuth});

export default authReducer;