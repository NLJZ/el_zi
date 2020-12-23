import React, { useState, useRef } from "react";
import ReactHowler from "react-howler";
import { useSelector } from "react-redux";

function AudioPlayer(props) {
  const source = [useSelector((state) => state.audio.audioFile)];
  console.log(source);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [durationTime, setDurationTime] = useState(null);
  const player = useRef();
  function handleOnLoad() {
    setLoaded(true);
    setDurationTime(player.current.duration());
  }
  function handlePause() {
    setPlaying(false);
  }
  function handlePlay() {
    handleOnLoad();
    setPlaying(true);
    console.log(player);
  }

  return (
    <div className="audioPlayer">
      <ReactHowler
        src={source}
        playing={playing}
        html5={true}
        onLoad={handleOnLoad}
        ref={player}
        volume={volume}
      />
      {playing === !true ? (
        <div className="audioControl" onClick={handlePlay}>
          <div className="playControl"></div>
        </div>
      ) : (
        <div className="audioControl" onClick={handlePause}>
          <div className="pauseControl"></div>
        </div>
      )}
      <div>
        <h1>{durationTime}</h1>
      </div>
    </div>
  );
}

export default AudioPlayer;
