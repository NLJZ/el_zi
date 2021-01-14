import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "./AudioPlayer.js";
import { useSelector } from "react-redux";

function AudioContainer() {
  const showAudioPlayer = useSelector((state) => state.audio.player);
  console.log(showAudioPlayer);
  return <div>Hi there.</div>;
}

export default AudioContainer;
