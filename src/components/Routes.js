import React from "react";
import { Route } from "react-router-dom";
import data from "../data/data.json";
import Work from "../components/work/Work.js";

function Routes() {
  const projectRoutes = data.map((project) => {
    let projObj = {};
    projObj.path = project.title
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/\u00e4/g, "ae")
      .replace(/\u00fc/g, "ue")
      .replace(/\u00f6/g, "oe")
      .replace(/\u00df/g, "ss");
    projObj.id = project.id;
    return projObj;
  });
  const routes = projectRoutes.map(({ path, id }, key) => {
    return (
      <Route key={key} path={"/" + path} component={() => <Work id={id} />} />
    );
  });
  return <>{routes}</>;
}

export default Routes;
