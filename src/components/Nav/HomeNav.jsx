import { useEffect, useState, useRef } from "react";
import styles from "./HomeNav.module.css";
import { NavLink } from "react-router"; // Fixed import (should be react-router-dom)

function HomeNav() {
  const [sticky, setSticky] = useState(false);
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
  }, []);

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
              Contact <div></div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomeNav;
