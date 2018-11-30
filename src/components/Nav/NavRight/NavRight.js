import React from "react";

import "./NavRight.scss";

import NavItem from "./../NavItem/NavItem";

export default function NavRight(props) {
  const { toggleNavHandler } = props;

  return (
    <div className="NavRight">
      <ul className="NavBar">
        <NavItem
          toggleNavHandler={toggleNavHandler}
          link={"/"}
          label={"HOME"}
          exact
        />
        <NavItem
          toggleNavHandler={toggleNavHandler}
          link={"/about"}
          label={"ABOUT ME"}
        />
        <NavItem
          toggleNavHandler={toggleNavHandler}
          link={"/projects"}
          label={"MY WORKS"}
        />
        <NavItem
          toggleNavHandler={toggleNavHandler}
          link={"/contact"}
          label={"HOW TO REACH ME"}
        />
      </ul>
    </div>
  );
}
