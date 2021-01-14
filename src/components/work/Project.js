import React from "react";
import Data from "../../data/data.json";
import parse from "html-react-parser";
import PlayButton from "./PlayButton.js";
import { motion, AnimatePresence } from "framer-motion";

function Project(props) {
  const projectId = props.projectId;
  const project = Data.filter((item) => item.id === projectId)[0];
  const description = parse(project.description);
  const credits = parse(project.credits);
  const additionalImages = project.additionalImages;
  const projectInfo = project.info.map((el, index) => {
    return (
      <span className="info" key={index}>
        {el}
      </span>
    );
  });
  const projectFile = project.file;
  const Image = () => {
    if (project.image !== undefined || null) {
      return <img src={project.image} alt={project.title + "image"} />;
    } else {
      return null;
    }
  };

  function AdditionalImageRender() {
    let images;
    if (additionalImages !== ("" || null || undefined)) {
      images = additionalImages.map((el, index) => {
        return <img key={index} src={el} alt={project.image + "image"} />;
      });
    } else {
      images = null;
    }
    return images;
  }

  return (
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>{project.title}</h1>
      {projectInfo}
      {projectFile !== "" ? <PlayButton project={project} /> : null}
      <div className="info"></div>
      {description}
      <Image />
      {credits}
      <AdditionalImageRender />
    </motion.div>
  );
}

export default Project;
