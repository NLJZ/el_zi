import React, { useState } from "react";
import ReactHowler from "react-howler";

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  function handlePause() {
    setPlaying(false);
  }
  function handlePlay() {
    setPlaying(true);
  }
  const currentAudio = "./audio/dasichalsdich.mp3";
  return (
    <div className="audioPlayer">
      <ReactHowler
        src="./audio/dasichalsdich.mp3"
        playing={playing}
        html5="true"
      />
      <div onClick={handlePlay}>Play</div>
      <div onClick={handlePause}>Pause</div>
    </div>
  );
}

export default AudioPlayer;
