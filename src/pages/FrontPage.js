import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <React.Fragment>
      <h1>
        <Link to="/index">HELLO</Link>
      </h1>
    </React.Fragment>
  );
}

export default FrontPage;
