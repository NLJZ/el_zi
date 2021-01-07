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

  function timeFormat(time) {
    let hrs = Math.floor(time / 60 / 60);
    let mins = Math.floor(time / 60) - hrs * 60;
    let secs = Math.floor(time % 60);

    let result =
      // don't need hours
      // hrs.toString().padStart(2, "0") +
      // ":" +
      mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");

    return result;
  }

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

  function handleSeek(newTime) {
    player.current.seek(newTime);
  }

  function handleOnEnd() {
    setPlaying(false);
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
          onEnd={handleOnEnd}
          html5={true}
          onLoad={handleOnLoad}
          ref={player}
          volume={volume}
          loop={false}
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
          <h2>{title}</h2>
          <div className="time">
            <h2>{timeFormat(currentTime)}</h2>
            <Slider
              currentTime={currentTime}
              durationTime={durationTime}
              handleSeek={handleSeek}
              setCurrentTime={setCurrentTime}
            />
            <h2>{timeFormat(durationTime)}</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AudioPlayer;
