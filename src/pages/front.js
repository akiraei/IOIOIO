import React from "react";
import { Link } from "react-router-dom";

function front() {
  return (
    <React.Fragment>
      <h1>
        <Link className="sign-anchor" to="/sign_up">
          Sign up
        </Link>
      </h1>
    </React.Fragment>
  );
}

export default front;
