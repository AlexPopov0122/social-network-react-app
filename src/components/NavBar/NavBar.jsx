import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="src/components#">Profile</a>
      </div>

      <div>
        <a href="src/components#">Messages</a>
      </div>

      <div>
        <a href="src/components#">News</a>
      </div>

      <div>
        <a href="src/components#">Music</a>
      </div>

      <div>
        <a href="src/components#">Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;
