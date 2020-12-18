import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      <div className="splashwrap">
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
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
