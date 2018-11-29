import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItem.scss";

export default function NavItem(props) {
  const { link, label, exact } = props;
  return (
    <li className="NavItem">
      <NavLink to={link} exact={exact}>
        {label}
      </NavLink>
    </li>
  );
}
