import styles from "./HomeNav.module.css";
import { NavLink } from "react-router";
function HomeNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src="logoimg.png" alt="" />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/event">Event</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNav;
