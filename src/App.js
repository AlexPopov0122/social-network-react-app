import "./App.css";
import Header from "./components/Header/Header";
import NavBarRight from "./components/NavBarRight/NavBarRight";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="mainContentWrapper">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/profile/*" element={<Profile/>}/>
                    </Routes>
                </div>
                <NavBarRight/>
            </div>
        </BrowserRouter>
    );
};
export default App;
