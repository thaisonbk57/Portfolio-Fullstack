import React from "react";

import "./Heading.scss";

export default function Heading(props) {
  const { type, text1, text2, color, fontSize, fontWeight } = props;

  const style = {
    color,
    fontSize,
    fontWeight
  };

  let heading = (
    <h1 className="Heading" style={style}>
      {text1} <span>{text2}</span>
    </h1>
  );

  if (type === "secondary") {
    heading = (
      <h2 className="Heading" style={style}>
        {text1}
      </h2>
    );
  }

  return heading;
}
