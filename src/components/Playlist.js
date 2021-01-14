import React from "react";
import Data from "../data/data.json";
import { useDispatch } from "react-redux";
import {
  setAudioFile,
  setPlaying,
  hidePlaylist,
  showPlayer,
} from "../redux/actions/index.js";
import { motion, AnimatePresence } from "framer-motion";

function PlayList(props) {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ul>{list}</ul>
    </motion.div>
  );
}

export default PlayList;
