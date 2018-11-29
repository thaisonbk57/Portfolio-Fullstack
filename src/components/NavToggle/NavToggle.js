import React from "react";

import "./NavToggle.scss";

export default function NavToggle(props) {
  return (
    <div className="NavToggle">
      <input id="nav-toggle" type="checkbox" />
      <label htmlFor="nav-toggle">
        <span className="stick-1" />
        <span className="stick-2" />
        <span className="stick-3" />
      </label>
    </div>
  );
}
