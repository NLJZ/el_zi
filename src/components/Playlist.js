import React from "react";
import Data from "../data/data.json";
import { useDispatch } from "react-redux";
import {
  setAudioFile,
  setPlaying,
  hidePlaylist,
} from "../redux/actions/index.js";

function PlayList() {
  const dispatch = useDispatch();
  function handleClick(file, title) {
    dispatch(setAudioFile(file));
    dispatch(setPlaying(title));
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
    }
  });
  return (
    <div className="playlist">
      <ul>{list}</ul>
    </div>
  );
}

export default PlayList;
