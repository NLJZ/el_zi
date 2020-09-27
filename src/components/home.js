import React, { Component } from "react";
import "./home-styles.css";

class Home extends Component {
  render() {
    return (
      <div class="home">
        <div class="splashcontainer">
          <div id="splashimage">
            <img src="./images/purpleear.jpg" alt="Ear" />
          </div>

          <div id="splashmenu">
            <h1>ELENA</h1>
            <h1>ZIESER</h1>
            <ul>
              <li>
                <a href="work.html">work</a>
              </li>
              <li>
                <a href="news.html">news</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
