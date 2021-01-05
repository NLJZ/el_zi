import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div className="home">
      <div className="splashwrap">
        <div className="splashcontainer">
          <div id="splashimage">
            <motion.img
              src="./images/purpleear.jpg"
              alt="Ear"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
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
    </motion.div>
  );
}

export default Home;
