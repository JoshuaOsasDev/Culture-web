import styles from "./HomeNav.module.css";
import { NavLink } from "react-router";
import { useContent } from "../../../context/UseContent";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import Button from "../Button/Button";

function HomeNav() {
  const {
    sticky,
    observerRef,
    menuOpen,
    handleCloseMenu,
    isClosing,
    setMenuOpen,
  } = useContent();

  return (
    <>
      <div
        ref={observerRef}
        style={{ position: "absolute", top: "200px", height: "1px" }}
      />

      <nav
        className={`${styles.nav} ${sticky && !menuOpen ? styles.sticky : ""}`}
      >
        <NavLink to="/">
          <img src="logoimg.png" alt="" />
        </NavLink>

        <button
          type="btnNav"
          className={`${sticky ? styles.menuToogleSticky : styles.menuToogle}`}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <HiBars3 />
        </button>

        <ul
          className={`${styles.navLinkUl} ${menuOpen ? styles.open : ""} ${
            isClosing ? styles.closing : ""
          }`}
        >
          <li>
            {menuOpen && (
              <Button onClick={handleCloseMenu} type="btnNavClose">
                <HiMiniXMark />
              </Button>
            )}
            <NavLink to="/about" onClick={handleCloseMenu}>
              About <div></div>
            </NavLink>
            <NavLink to="/event" onClick={handleCloseMenu}>
              Event <div></div>
            </NavLink>
            <NavLink to="/history" onClick={handleCloseMenu}>
              History <div></div>
            </NavLink>
            <NavLink to="/news" onClick={handleCloseMenu}>
              News <div></div>
            </NavLink>
            <NavLink to="/contact" onClick={handleCloseMenu}>
              Contact <div></div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomeNav;
