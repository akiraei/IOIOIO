import React from "react";
import { Link } from "react-router-dom";

class TagPC extends React.Component {
  defaultProps = {
    tag: "tag"
  };

  render() {
    return (
      <React.Fragment>
        <span> {this.props.tag} </span>
      </React.Fragment>
    );
  }
}

export default TagPC;
