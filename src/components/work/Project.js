import React from "react";
import Data from "../../data/data.json";
import parse from "html-react-parser";
import PlayButton from "./PlayButton.js";
import { useSelector } from "react-redux";

function Project(props) {
  const source = useSelector((state) => state.audio.audioFile);
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
        return <img src={el} alt={project.image + "image"} />;
      });
    } else {
      images = null;
    }
    return images;
  }

  return (
    <div className="project">
      <h1>{project.title}</h1>
      {projectInfo}
      {projectFile !== "" && source !== projectFile ? (
        <PlayButton project={project} />
      ) : null}
      <div className="info"></div>
      {description}
      <Image />
      {credits}
      <AdditionalImageRender />
    </div>
  );
}

export default Project;
