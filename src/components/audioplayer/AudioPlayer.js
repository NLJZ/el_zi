import React, { useState, useRef } from "react";
import ReactHowler from "react-howler";
import Data from "../../data/data.json";

function AudioPlayer(props) {
  const [source, setSource] = useState(["", ""]);
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
  const handleListClick = (file) => {
    setSource(file);
    handlePlay();
  };
  const playlist = Data.map((item) => {
    let file = item.file;
    return (
      <li key={item.id} onClick={() => handleListClick(file)}>
        {item.title}
      </li>
    );
  });
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
          Play
        </div>
      ) : (
        <div className="audioControl" onClick={handlePause}>
          Pause
        </div>
      )}
      <div>
        <h1>{durationTime}</h1>
      </div>
      <div>
        <ul>{playlist}</ul>
      </div>
    </div>
  );
}

export default AudioPlayer;
