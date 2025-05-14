import { NavLink } from "react-router";

function QuickLink() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/event">Event</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/history">Histoty</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/news">News</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/photography">Photography</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/contact">Contanct</NavLink>{" "}
        </li>
      </ul>
    </div>
  );
}

export default QuickLink;
