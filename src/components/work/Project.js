import React from "react";
import Data from "../../data/data.json";
import parse from "html-react-parser";
import PlayButton from "./PlayButton.js";

function Project(props) {
  const projectId = props.projectId;
  console.log(projectId);
  const project = Data.filter((item) => item.id === projectId)[0];
  const description = parse(project.description);
  const credits = parse(project.credits);
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
  return (
    <div className="project">
      <h1>{project.title}</h1>
      {projectInfo}
      {projectFile !== "" && <PlayButton project={project} />}
      <div className="info"></div>
      {description}
      <Image />
      {credits}
    </div>
  );
}

export default Project;
