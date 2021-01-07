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
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navcontent">
          <div>
            <NavLink to="/">
              <h2>Elena Zieser</h2>
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>Listen</li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </motion.nav>
    );
  }
}

export default Navbar;
