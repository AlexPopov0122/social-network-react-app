import React from "react";
import "./App.css";
import OnlineBar from "./components/OnlineBar/OnlineBar";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Suspense, useEffect} from "react";
import {connect, Provider} from "react-redux";
import Fetching from "./components/Fetching/Fetching";
import store from "./Redux/Reducers/redux-store";
import {getAuthMe} from "./Redux/Reducers/auth-reducer";

const FindFriendsContainer = React.lazy(() => import("./components/FindFriends/FindFriendsContainer.tsx"));
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const Login = React.lazy(() => import("./components/Login/Login"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const App = (props) => {

    const catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some server error")
    }

    useEffect(() => {
        props.getAuthMe()
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
        return window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
    }, [])

    if (!props.isInitial) {
        return <Fetching/>
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="mainContentWrapper">
                <Suspense fallback={<div><Fetching/></div>}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/login'}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs/>}/>
                        <Route path="/profile/:userId?"
                               element={<ProfileContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/findFriends/*"
                               element={<FindFriendsContainer/>}/>
                        <Route path="/login/*"
                               element={<Login/>}/>
                    </Routes>
                </Suspense>
            </div>
            <OnlineBar/>
        </div>
    );
}

const AppContainer = connect(null, {getAuthMe})(App);

const MainApp = (props) => {
    return (
        <Provider store={store}>
            <HashRouter /*basename={process.env.PUBLIC_URL}*/>
                <AppContainer isInitial={store.getState().authUserData.isInitial}/>
            </HashRouter>
        </Provider>
    )
}

export default MainApp;