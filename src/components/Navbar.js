import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  let path = `${location.pathname}`;
  if (path === "/") {
    return null;
  } else {
    return (
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ul>
          <li>
            <NavLink to="/">
              <h2>Elena Zieser</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </motion.nav>
    );
  }
}

export default Navbar;
