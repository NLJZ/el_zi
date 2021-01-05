import React from "react";
import WorkNav from "./WorkNav.js";
import Project from "./Project.js";
import { motion } from "framer-motion";

function Work(props) {
  const projectId = props.id;
  const SplashImage = () => {
    return (
      <div className="splashImage">
        <img src="./images/radionobg3.png" alt="slash image of radio" />
      </div>
    );
  };

  return (
    <motion.section className="work">
      <WorkNav />
      {projectId !== undefined ? (
        <Project projectId={projectId} />
      ) : (
        <SplashImage />
      )}
    </motion.section>
  );
}

export default Work;
