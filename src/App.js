import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/work/Work";
import About from "./components/About";
import AudioContainer from "./components/audioplayer/AudioContainer.js";
import Navbar from "./components/Navbar.js";
import "./scss/main.scss";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Routes />
        </Switch>
        <AudioContainer />
      </Router>
    </div>
  );
}

export default App;
