import React, { useState, useRef, useEffect } from "react";

function VolumeControl(props) {
  const handleChange = () => {
    console.log("change");
  };
  return (
    <div id="vol">
      <div>Volume {props.volume * 10}</div>
      {/* <div className="volumeControl">
        <div id="volumeInner"></div>
      </div> */}
    </div>
  );
}

export default VolumeControl;
