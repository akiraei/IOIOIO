import React from "react";
import { Link } from "react-router-dom";

import UnitPC from "./UnitPC";

class DevPC extends React.Component {
  defaultProps = {
    category: "Dev"
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.category}</h1>
        <UnitPC />
      </React.Fragment>
    );
  }
}

export default DevPC;
