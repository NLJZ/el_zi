import React from "react";
import Data from "../../data/data.json";
import parse from "html-react-parser";

function Project(props) {
  const projectId = props.projectId;
  console.log(projectId);
  const project = Data.filter((item) => item.id === projectId)[0];
  const description = parse(project.description);
  const credits = parse(project.credits);
  console.log(project);
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
      <Image />
      {description}
      {credits}
    </div>
  );
}

export default Project;
