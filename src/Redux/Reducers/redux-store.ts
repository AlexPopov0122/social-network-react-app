// import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import findFriendsReducer from "./find-friend-reducer";
import authReducer from "./auth-reducer";
// import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import chatReducer from "./chat-reducer";


const reducers = {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findFriendsPage: findFriendsReducer,
    authUserData: authReducer,
    form: formReducer,
    chat: chatReducer
};


export const store = configureStore({
    reducer: {...reducers}
})
export type TState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ActionsTypes<T> = T extends {[key: string]: (...arg: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, TState, unknown, A>

// @ts-ignore
window.store = store;

export default store;

//legacy_createStore as createStore
// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));