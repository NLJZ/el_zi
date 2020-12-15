import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  let path = `${location.pathname}`;
  if (path !== "/") {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
        </ul>
      </nav>
    );
  } else return null;
}

export default Navbar;
