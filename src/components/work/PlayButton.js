import React from "react";
import { useDispatch } from "react-redux";
import { setAudioFile, setPlaying } from "../../redux/actions/index.js";

function PlayButton(props) {
  const projectFile = props.project.file;
  let title;
  if (!["", undefined, null].includes(props.project.audioTitle)) {
    title = props.project.audioTitle;
  } else {
    title = props.project.title;
  }

  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setPlaying(title));
    dispatch(setAudioFile(projectFile));
  }
  return (
    <div className="playWrapper">
      <div className="playControl" onClick={handleClick}></div>
    </div>
  );
}

export default PlayButton;
