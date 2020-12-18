import React from "react";
import WorkNav from "./WorkNav.js";
import Project from "./Project.js";
import { motion } from "framer-motion";

function Work(props) {
  const projectId = props.id;
  return (
    <section className="work">
      <WorkNav />
      {projectId !== undefined ? <Project projectId={projectId} /> : null}
    </section>
  );
}

export default Work;
