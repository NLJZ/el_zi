import React, { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";

function VolumeControl({ setVolume, volume }) {
  const [showVol, setShowVol] = useState(false);

  console.log(volume);

  const handleClick = () => {
    !showVol ? setShowVol(true) : setShowVol(false);
  };

  return (
    <div id="vol">
      <div className="volIcon" onClick={handleClick}></div>
      {showVol ? <VolumeSlider vol={volume} changeVol={setVolume} /> : null}
    </div>
  );
}

export default VolumeControl;
