import React from "react";
import Playlist from "./Playlist.js";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { showPlaylist, hidePlaylist } from "../redux/actions/index.js";

function Navbar() {
  const playlist = useSelector((state) => state.audio.playlist);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(showPlaylist());
  }
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
            <li onClick={handleClick}>Listen</li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          {playlist === true ? <Playlist /> : null}
        </div>
      </motion.nav>
    );
  }
}

export default Navbar;
