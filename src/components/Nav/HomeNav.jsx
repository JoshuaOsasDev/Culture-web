import { useEffect, useState } from "react";
import styles from "./HomeNav.module.css";
import { NavLink } from "react-router";
function HomeNav() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(sticky);

  return (
    <nav className={`${styles.nav} ${sticky ? styles.sticky : ""}`}>
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
