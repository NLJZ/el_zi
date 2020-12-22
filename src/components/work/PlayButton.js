import React from "react";
import { useDispatch } from "react-redux";
import { setAudioFile } from "../../redux/actions/index.js";

function PlayButton(props) {
  const projectFile = props.projectFile;
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setAudioFile(projectFile));
  }
  return (
    <div className="playWrapper">
      <div className="playControl" onClick={handleClick}></div>
    </div>
  );
}

export default PlayButton;
