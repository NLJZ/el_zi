import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="splashcontainer">
        <div id="splashimage">
          <img src="./images/purpleear.jpg" alt="Ear" />
        </div>

        <div id="splashmenu">
          <h1>ELENA</h1>
          <h1>ZIESER</h1>
          <ul>
            <li>
              <Link to="/work">work</Link>
            </li>
            {/* <li>
              <a href="news.html">news</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
