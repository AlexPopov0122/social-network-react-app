import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavBarRight from "./components/NavBarRight";
import Profile from "./components/Profile";

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
