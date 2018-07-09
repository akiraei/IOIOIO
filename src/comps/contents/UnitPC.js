import React from "react";
import { Link } from "react-router-dom";

import TagPC from "./TagPC";

class UnitPC extends React.Component {
  defaultProps = {
    title: "title",
    lastDate: "0000.00.00",
    initDate: "0000.00.00",
    body: "body"
  };

  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        {this.props.lastDate === this.props.initDate && (
          <p>Lastest Edit: {this.props.lastDate}</p>
        )}
        <p>Inital Date: {this.props.initDate}</p>
        <p>{this.props.body}</p>
        <TagPC />
      </React.Fragment>
    );
  }
}

export default UnitPC;
