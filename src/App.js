import "./App.css";
import Header from "./components/Header/Header";
import NavBarRight from "./components/NavBarRight/NavBarRight";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
            <NavBarRight/>
        </div>
    );
};
export default App;
