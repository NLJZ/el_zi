import React, { useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";
import Data from "../../data/data.json";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Slider(props) {
  const currentTime = props.currentTime;
  const durationTime = props.durationTime;
  let innerWidth = (currentTime / durationTime) * 100 + "%";

  console.log(innerWidth);
  return (
    <div className="sliderHolder">
      {currentTime > 0 ? (
        <div className="sliderInner" style={{ width: innerWidth }}></div>
      ) : null}

      {/* <motion.div
        className="sliderInner"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: `${innerWidth}`, opacity: 0.8 }}
        transition={{ duration: 0.8, type: "tween" }}
        style={{ width: innerWidth }}
      ></motion.div> */}
    </div>
  );
}

export default Slider;
