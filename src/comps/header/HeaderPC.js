import React from "react";
import { Link } from "react-router-dom";

import MenuUnitPC from "./MenuUnitPC";

function HeaderPC() {
  return (
    <React.Fragment>
      <div class="ui container">
        <Link to={"/Bio"} render={<MenuUnitPC body={"Bio"} />}>
          BIO
        </Link>
        <Link to={"/Pic"} render={<MenuUnitPC body={"Pic"} />}>
          PIC
        </Link>
        <Link to={"/Dev"} render={<MenuUnitPC body={"Dev"} />}>
          DEV
        </Link>
      </div>
    </React.Fragment>
  );
}

export default HeaderPC;
