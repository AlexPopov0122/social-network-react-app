// import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {configureStore} from "@reduxjs/toolkit";
import findFriendsReducer from "./find-friend-reducer";
import authReducer from "./auth-reducer";
// import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findFriendsPage: findFriendsReducer,
    authUserData: authReducer,
    form: formReducer
};


type TReducer = typeof reducers
// @ts-ignore
export type TState = ReturnType<TReducer>
// let state: TState;

export const store = configureStore({
    reducer: {...reducers} as TState
})

// @ts-ignore
window.store = store;

export default store;

//legacy_createStore as createStore
// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));