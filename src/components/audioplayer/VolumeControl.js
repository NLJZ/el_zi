import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function VolumeControl(props) {
  const vol = props.volume * 10;
  const [position, setPosition] = useState(null);
  const ref = useRef();

  let innerWidth = vol * 100 + "%";
  const handleChange = () => {
    console.log("change");
  };
  return (
    <div id="vol">
      <div className="volIcon"></div>
    </div>
  );
}

export default VolumeControl;
