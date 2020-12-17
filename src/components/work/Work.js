import React from "react";
import WorkNav from "./WorkNav.js";
import Project from "./Project.js";

function Work(props) {
  const projectId = props.id;
  return (
    <div className="work">
      <WorkNav />
      {projectId !== undefined ? <Project projectId={projectId} /> : null}
    </div>
  );
}

export default Work;
