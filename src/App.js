import React from "react";
import AudioPlayer from "./components/audioplayer/AudioPlayer.js";
import Home from "./components/home.js";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <AudioPlayer />
    </div>
  );
}

export default App;
