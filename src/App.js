import React from "react";
import AudioPlayer from "./components/audioplayer/AudioPlayer.js";
import Home from "./components/Home.js";
import Routes from "./components/Routes.js";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Routes />
      <AudioPlayer />
    </div>
  );
}

export default App;
