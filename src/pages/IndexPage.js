import React from "react";
import { Link, Route } from "react-router-dom";

import BioPC from "../comps/contents/BioPC";
import ContainerPC from "../comps/contents/ContainerPC";
import IntroPC from "../comps/contents/IntroPC";

function IndexPage() {
  return (
    <React.Fragment>
      <Route path="/index/bio" component={BioPC} />
      <Route
        path="/index/dev"
        render={() => <ContainerPC category={"Dev"} />}
      />
      <Route
        path="/index/pic"
        render={() => <ContainerPC category={"Pic"} />}
      />
      <Route exact path="/index" component={IntroPC} />
    </React.Fragment>
  );
}

export default IndexPage;
