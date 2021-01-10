import React, { useRef } from "react";
import Playlist from "./Playlist.js";
import onClickOutside from "../hooks/onClickOutside";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { showPlaylist, hidePlaylist } from "../redux/actions/index.js";

function Navbar() {
  const ref = useRef();
  const playlist = useSelector((state) => state.audio.playlist);
  onClickOutside(ref, () => dispatch(hidePlaylist()));
  const dispatch = useDispatch();
  function handleClick() {
    if (playlist === false) {
      dispatch(showPlaylist());
    }
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
          <div className="navElement">
            <NavLink to="/">
              <h2>Elena Zieser</h2>
            </NavLink>
          </div>
          <ul>
            <div className="navElement">
              <NavLink to="/work">Work</NavLink>
            </div>
            <div className="navElement" ref={ref}>
              <span onClick={handleClick}>Listen</span>{" "}
              {playlist === true ? <Playlist /> : null}
            </div>

            <div className="navElement">
              <NavLink to="/about">About</NavLink>
            </div>
          </ul>
        </div>
      </motion.nav>
    );
  }
}

export default Navbar;
