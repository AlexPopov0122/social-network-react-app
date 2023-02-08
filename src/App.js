import "./App.css";
import Header from "./components/Header/Header";
import OnlineBar from "./components/OnlineBar/OnlineBar";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import FindFriendsContainer from "./components/FindFriends/FindFriendsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="mainContentWrapper">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs store={props.store}/>}/>
                        <Route path="/profile/*"
                               element={<Profile store={props.store}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/findFriends/*"
                               element={<FindFriendsContainer/>}/>
                    </Routes>
                </div>
                <OnlineBar/>
            </div>
        </BrowserRouter>
    );
};
export default App;
