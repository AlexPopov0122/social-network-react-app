// import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {configureStore} from "@reduxjs/toolkit";
import dataUserReducer from "./dataUser-reducer";
import findFriendsReducer from "./find-friend-reducer";
import authReducer from "./auth-reducer";
// import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    dataUser: dataUserReducer,
    findFriendsPage: findFriendsReducer,
    authUserData: authReducer,
    form: formReducer
};

export const store = configureStore({
    reducer: {...reducers}
})


window.store = store;

export default store;

//legacy_createStore as createStore
// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));