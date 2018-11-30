import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItem.scss";

export default function NavItem(props) {
  const { link, label, exact, toggleNavHandler } = props;
  return (
    <li className="NavItem">
      <NavLink onClick={toggleNavHandler} to={link} exact={exact}>
        {label}
      </NavLink>
    </li>
  );
}
