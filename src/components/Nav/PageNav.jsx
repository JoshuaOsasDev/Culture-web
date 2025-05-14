import { NavLink } from "react-router";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src="./logoimg.png" alt="" />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/about">About</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/event">Event</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/history">History</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact">contact</NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
