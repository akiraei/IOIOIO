import React from "react";
import { Link } from "react-router-dom";

import HeaderPC from "../header/HeaderPC";
import BoxPC from "./BoxPC";

function ContainerPC() {
  return (
    <React.Fragment>
      <HeaderPC />
      <BoxPC {...this.props} />
    </React.Fragment>
  );
}

export default ContainerPC;
