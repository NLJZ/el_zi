import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAudioFile,
  setPlaying,
  showPlayer,
} from "../../redux/actions/index.js";

function PlayButton(props) {
  const source = useSelector((state) => state.audio.audioFile);
  const projectFile = props.project.file;
  let title;
  if (!["", undefined, null].includes(props.project.audioTitle)) {
    title = props.project.audioTitle;
  } else {
    title = props.project.title;
  }

  const isPlaying = source === projectFile;

  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setPlaying(title));
    dispatch(setAudioFile(projectFile));
    dispatch(showPlayer());
  }
  return (
    <>
      {!isPlaying && (
        <div className="playWrapper" onClick={handleClick}>
          <div className="playControl"></div>
        </div>
      )}
    </>
  );
}

export default PlayButton;
