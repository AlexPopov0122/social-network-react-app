import "./App.css";
import OnlineBar from "./components/OnlineBar/OnlineBar";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import FindFriendsContainer from "./components/FindFriends/FindFriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {getAuthMe} from "./Redux/auth-reducer";
import Fetching from "./components/Fetching/Fetching";

class App extends Component {

    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {

        if (!this.props.isInitial) {
            return <Fetching/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="mainContentWrapper">
                        <Routes>
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
                    </div>
                    <OnlineBar/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, {getAuthMe})(App);
