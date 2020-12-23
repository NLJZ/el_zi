import React, { useState, useRef } from "react";
import ReactHowler from "react-howler";
import Data from "../../data/data.json";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function AudioPlayer(props) {
  const source = props.source;
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
    setPlaying(true);
    console.log(player);
  }

  return (
    <motion.div
      className="audioPlayer"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
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
    </motion.div>
  );
}

export default AudioPlayer;
