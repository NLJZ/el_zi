import React from "react";
import WorkNav from "./WorkNav.js";
import Project from "./Project.js";
import { motion } from "framer-motion";

function Work(props) {
  const projectId = props.id;

  return (
    <motion.section className="work">
      <WorkNav />
      {projectId !== undefined ? (
        <Project projectId={projectId} />
      ) : (
        <div className="splashImage">
          <motion.img
            initial={{ x: 70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="./images/radionobg3.png"
            alt="slash radio"
          />
        </div>
      )}
    </motion.section>
  );
}

export default Work;
