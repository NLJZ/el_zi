import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/work/Work";
import AudioPlayer from "./components/audioplayer/AudioPlayer.js";
import Navbar from "./components/Navbar.js";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
        </Switch>
        <AudioPlayer />
      </Router>
    </div>
  );
}

export default App;
