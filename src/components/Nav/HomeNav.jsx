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
          <NavLink to="/about">
            About <div></div>
          </NavLink>
          <NavLink to="/event">
            Event <div></div>
          </NavLink>
          <NavLink to="/history">
            History <div></div>
          </NavLink>
          <NavLink to="/news">
            News <div></div>
          </NavLink>
          <NavLink to="/contact">
            contact <div></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNav;
