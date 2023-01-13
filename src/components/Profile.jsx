import Advertising from "./Advertising";
import Newsline from "./Newsline";

const Profile = () => {
  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <Newsline/>
        <Advertising/>
      </div>
    </div>
  );
};

export default Profile;
