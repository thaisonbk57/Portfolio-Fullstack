import React from "react";

import "./NavLeft.scss";

import Logo from "./../../UI/Logo/Logo";

export default function NavLeft(props) {
  return (
    <div className="NavLeft">
      <div className="Logo-wrapper">
        <Logo />
      </div>
    </div>
  );
}
