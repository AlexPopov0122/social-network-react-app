import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
// import {configureStore} from "@reduxjs/toolkit";
import dataUserReducer from "./dataUser-reducer";
import findFriendsReducer from "./find-friend-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    dataUser: dataUserReducer,
    findFriendsPage: findFriendsReducer
})

let store = legacy_createStore(reducers);

window.store = store;

export default store;

//legacy_createStore as createStore