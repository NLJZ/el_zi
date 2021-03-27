import React from "react";
function VolumeSlider({ changeVol, vol }) {
  return (
    <div className="volSlider">
      <div className="volSetting" onClick={() => changeVol(1)}></div>
      <div className="volSetting" onClick={() => changeVol(0.9)}></div>
      <div className="volSetting" onClick={() => changeVol(0.8)}></div>
      <div className="volSetting" onClick={() => changeVol(0.7)}></div>
      <div className="volSetting" onClick={() => changeVol(0.6)}></div>
      <div className="volSetting" onClick={() => changeVol(0.5)}></div>
      <div className="volSetting" onClick={() => changeVol(0.4)}></div>
      <div className="volSetting" onClick={() => changeVol(0.3)}></div>
      <div className="volSetting" onClick={() => changeVol(0.2)}></div>
      <div className="volSetting" onClick={() => changeVol(0.1)}></div>
      <div className="volSetting" onClick={() => changeVol(0)}></div>
      <div
        className="indicator"
        style={{
          height: `${vol * 10 * 20 + 20}px`,
          backgroundColor: "#fff",
        }}
      ></div>
    </div>
  );
}

export default VolumeSlider;
