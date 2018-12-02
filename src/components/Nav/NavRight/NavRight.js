import React from "react";

import "./NavRight.scss";

import NavItem from "./../NavItem/NavItem";

const navItems = [
  {
    label: "HOME",
    link: "/",
    exact: true
  },
  {
    label: "ABOUT ME",
    link: "/about",
    exact: false
  },
  {
    label: "MY WORKS",
    link: "/projects",
    exact: false
  },
  {
    label: "HOW TO REACH ME",
    link: "/contact",
    exact: false
  }
];

export default function NavRight(props) {
  const { toggleNavHandler } = props;

  const menu = navItems.map((item, index) => {
    return (
      <NavItem
        key={index}
        toggleNavHandler={toggleNavHandler}
        link={item.link}
        label={item.label}
        exact={item.exact}
        order={index}
      />
    );
  });

  return (
    <div className="NavRight">
      <ul className="NavBar">{menu}</ul>
    </div>
  );
}
