import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import data from "../data/data.json";
import Work from "../components/work/Work.js";

function Routes() {
  const projectRoutes = data.map((project) => {
    let projObj = {};
    projObj.path = project.title.toLowerCase().replace(/\s/g, "");
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
