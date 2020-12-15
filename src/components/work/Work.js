import React from "react";
import WorkNav from "./WorkNav.js";
import Project from "./Project.js";

function Work() {
  const projectId = "001";
  return (
    <div className="work">
      <h1>Work Page</h1>
      <WorkNav />
      <Project projectId={projectId} />
    </div>
  );
}

export default Work;
