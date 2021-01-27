import React, { useRef } from "react";
import Data from "../data/data.json";
import { useDispatch } from "react-redux";
import onClickOutside from "../hooks/onClickOutside";
import {
  setAudioFile,
  setPlaying,
  hidePlaylist,
  showPlayer,
} from "../redux/actions/index.js";
import { motion, AnimatePresence } from "framer-motion";

function PlayList(props) {
  const ref = useRef();
  onClickOutside(ref, () => dispatch(hidePlaylist()));
  console.log(props);
  const dispatch = useDispatch();
  console.log("playlist render");
  function handleClick(file, title) {
    dispatch(setAudioFile(file));
    dispatch(setPlaying(title));
    dispatch(showPlayer());
    dispatch(hidePlaylist());
  }
  const list = Data.map((item) => {
    const file = item.file;
    let title;
    if (!["", undefined, null].includes(item.audioTitle)) {
      title = item.audioTitle;
    } else {
      title = item.title;
    }
    if (file !== "") {
      return (
        <li key={item.id} onClick={() => handleClick(file, title)}>
          {item.title}
        </li>
      );
    } else {
      return null;
    }
  });
  return (
    <motion.div
      className="playlist"
      initial={{ height: "0%", opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.3 }}
      ref={ref}
    >
      <ul>{list}</ul>
    </motion.div>
  );
}

export default PlayList;
