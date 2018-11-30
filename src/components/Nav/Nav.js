import React from "react";

import "./Nav.scss";

import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";

export default function Nav(props) {
  const { toggleNavHandler } = props;

  return (
    <div className="Nav">
      <NavLeft />
      <NavRight toggleNavHandler={toggleNavHandler} />
    </div>
  );
}
