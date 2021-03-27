import React from "react";
import AudioPlayer from "./AudioPlayer.js";
import { useSelector } from "react-redux";

function AudioContainer() {
  const showAudioPlayer = useSelector((state) => state.audio.player);
  return <>{showAudioPlayer ? <AudioPlayer /> : null}</>;
}

export default AudioContainer;
