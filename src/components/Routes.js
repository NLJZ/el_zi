import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
    </Switch>
  );
}

export default Routes;
