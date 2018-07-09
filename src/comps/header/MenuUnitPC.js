import React from "react";
import { Link } from "react-router-dom";

class MenuUnitPC extends React.Component {
  defaultProps = {
    body: "MENU"
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.props.body}</div>
      </React.Fragment>
    );
  }
}

export default MenuUnitPC;
