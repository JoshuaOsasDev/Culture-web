import { useEffect, useState, useRef } from "react";
import styles from "./HomeNav.module.css";
import { NavLink } from "react-router"; // Fixed import (should be react-router-dom)
import { useContent } from "../../../context/UseContent";
import { HiBars3 } from "react-icons/hi2";

import Button from "../Button/Button";
function HomeNav() {
  const { sticky, setSticky, menuOpen, setMenuOpen } = useContent();
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the observed element is not intersecting (scrolled past)
        setSticky(!entry.isIntersecting);
      },
      {
        root: null, // relative to viewport
        threshold: 0, // trigger when 0% of the target is visible
        rootMargin: "-200px 0px 0px 0px", // adjust this value to change when sticky activates
      }
    );

    // Observe the hero section or another element that marks when to make nav sticky
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [setSticky]);

  return (
    <>
      {/* This div is placed in the Hero component where we want to observe intersection */}
      <div
        ref={observerRef}
        style={{ position: "absolute", top: "200px", height: "1px" }}
      />

      <nav className={`${styles.nav} ${sticky ? styles.sticky : ""}`}>
        <NavLink to="/">
          <img src="logoimg.png" alt="" />
        </NavLink>

        <button
          type="btnNav"
          className={styles.menuToogle}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <HiBars3 />
        </button>
        <ul className={`${styles.navLinkUl} ${menuOpen ? styles.open : ""}`}>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About <div></div>
            </NavLink>
            <NavLink to="/event" onClick={() => setMenuOpen(false)}>
              Event <div></div>
            </NavLink>
            <NavLink to="/history" onClick={() => setMenuOpen(false)}>
              History <div></div>
            </NavLink>
            <NavLink to="/news" onClick={() => setMenuOpen(false)}>
              News <div></div>
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact <div></div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomeNav;
