import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";

function Slider(props) {
  const player = props.player;
  const ref = useRef(null);
  const [position, setPosition] = useState(null);
  const [seekPosition, setSeekPosition] = useState(null);
  const [currentTime, setCurrentTime] = useState(0.0);

  const durationTime = props.durationTime;
  let innerWidth = (currentTime / durationTime) * 100 + "%";

  const showCurrentTime = () => {
    player && setCurrentTime(Math.round(player.current.seek()));
  };
  useEffect(() => {
    props.handleSeek(seekPosition);
    props.setCurrentTime(seekPosition);
  }, [seekPosition]);

  useEffect(() => {
    setInterval(() => {
      showCurrentTime();
    }, 300);
  });

  function handleMove(e) {
    var rect = e.target.getBoundingClientRect();
    let position = Math.ceil(e.clientX - rect.x);
    setPosition(position);
  }

  function handleClick(e) {
    e.preventDefault();
    let width;
    let newTime;
    if (ref) {
      width = ref.current.clientWidth;
      newTime = Math.floor((position * durationTime) / width);
      setSeekPosition(newTime);
    }
  }

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

  return (
    <div className="time">
      <h2>{timeFormat(currentTime)}</h2>
      <div
        ref={ref}
        id="slider"
        className="sliderHolder"
        onMouseMove={handleMove}
        onClick={handleClick}
      >
        {currentTime > 0 ? (
          <motion.div
            className="sliderInner"
            initial={{ width: 0 }}
            animate={{ width: `${innerWidth}` }}
            transition={{ duration: 0.2, type: "tween" }}
            style={{ width: innerWidth }}
          ></motion.div>
        ) : null}
      </div>
      <h2>{timeFormat(durationTime)}</h2>
    </div>
  );
}

export default Slider;
