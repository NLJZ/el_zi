import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function VolumeControl(props) {
  const vol = props.volume * 10;
  const [showVol, setShowVol] = useState(false);
  const [position, setPosition] = useState(null);
  const ref = useRef();

  let innerWidth = vol * 100 + "%";
  const handleChange = () => {
    console.log("change");
  };
  const handleClick = () => {
    !showVol ? setShowVol(true) : setShowVol(false);
  };

  const VolControl = () => {
    return <div>Volume</div>;
  };
  return (
    <div id="vol">
      <div className="volIcon" onClick={handleClick}>
        {showVol ? <VolControl /> : null}
      </div>
    </div>
  );
}

export default VolumeControl;
