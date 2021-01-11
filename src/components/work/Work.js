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
        <motion.div
          className="splashImage"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <motion.img src="./images/radionobg3.png" alt="slash radio" />
        </motion.div>
      )}
    </motion.section>
  );
}

export default Work;
