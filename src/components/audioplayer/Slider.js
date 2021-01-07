import React, { useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";
import Data from "../../data/data.json";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Slider(props) {
  const ref = useRef(null);
  const [position, setPosition] = useState(null);
  const [seeking, setSeeking] = useState(false);
  const [seekPosition, setSeekPosition] = useState(null);
  const currentTime = props.currentTime;
  const durationTime = props.durationTime;
  let innerWidth = (currentTime / durationTime) * 100 + "%";
  useEffect(() => {
    props.handleSeek(seekPosition);
    props.setCurrentTime(seekPosition);
  }, [seekPosition]);

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

  return (
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
  );
}

export default Slider;
