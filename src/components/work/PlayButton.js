import React from "react";
import { useDispatch } from "react-redux";
import { setAudioFile, setPlaying } from "../../redux/actions/index.js";

function PlayButton(props) {
  const projectFile = props.project.file;
  const title = props.project.title;
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setAudioFile(projectFile));
    dispatch(setPlaying(title));
  }
  return (
    <div className="playWrapper">
      <div className="playControl" onClick={handleClick}></div>
    </div>
  );
}

export default PlayButton;
