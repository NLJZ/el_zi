import React, { useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";
import Slider from "./Slider.js";
import Data from "../../data/data.json";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function AudioPlayer(props) {
  const source = props.source;
  const title = props.title;
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [durationTime, setDurationTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(0.0);
  const player = useRef();
  const showCurrentTime = () => {
    setCurrentTime(Math.round(player.current.seek()));
  };

  useEffect(() => {
    setInterval(() => {
      showCurrentTime();
    }, 300);
  });

  function handleOnLoad() {
    setLoaded(true);
    setDurationTime(player.current.duration());
    handlePlay();
  }

  function handlePause() {
    setPlaying(false);
  }

  function handlePlay() {
    setPlaying(true);
    showCurrentTime();
  }

  return (
    <motion.div
      className="audioPlayer"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="playerControls">
        <ReactHowler
          src={source}
          playing={playing}
          html5={true}
          onLoad={handleOnLoad}
          ref={player}
          volume={volume}
          loop="false"
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
        <div className="playinfo">
          {/* <h1>{currentTime}</h1>
        <h1>{durationTime}</h1> */}
          <h2>{title}</h2>
        </div>
      </div>
      <Slider currentTime={currentTime} durationTime={durationTime} />
    </motion.div>
  );
}

export default AudioPlayer;
