import React from "react";

import "./NavRight.scss";

import NavItem from "./../NavItem/NavItem";

export default function NavRight(props) {
  return (
    <div className="NavRight">
      <ul className="NavBar">
        <NavItem link={"/"} label={"HOME"} exact />
        <NavItem link={"/about"} label={"ABOUT ME"} />
        <NavItem link={"/projects"} label={"MY WORK"} />
        <NavItem link={"/contact"} label={"HOW TO REACH ME"} />
      </ul>
    </div>
  );
}
