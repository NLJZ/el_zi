import React, { useState, useRef } from "react";
import ReactHowler from "react-howler";
import Slider from "./Slider.js";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import VolumeControl from "./VolumeControl.js";

function AudioPlayer() {
  const source = useSelector((state) => state.audio.audioFile);
  const title = useSelector((state) => state.audio.playing);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [durationTime, setDurationTime] = useState(null);
  // const [currentTime, setCurrentTime] = useState(0.0);
  const player = useRef();

  function handleOnLoad() {
    player && setDurationTime(player.current.duration());
    handlePlay();
  }

  function handlePause() {
    setPlaying(false);
  }

  function handlePlay() {
    setPlaying(true);
  }

  function handleSeek(newTime) {
    if (player !== undefined && newTime !== undefined) {
      player.current.seek(newTime);
    }
  }

  function handleOnEnd() {
    setPlaying(false);
  }

  function handleLoadError() {
    console.log("error loading file");
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
          onLoadError={handleLoadError}
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
          <h3>{title}</h3>
          <Slider
            player={player}
            durationTime={durationTime}
            handleSeek={handleSeek}
          />
          <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
      </div>
    </motion.div>
  );
}

export default AudioPlayer;
