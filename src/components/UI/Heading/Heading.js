import React from "react";

import "./Heading.scss";

export default function Heading(props) {
  const { type, text1, text2 } = props;

  let heading = (
    <h1 className="Heading">
      {text1} <span>{text2}</span>
    </h1>
  );

  if (type === "secondary") {
    heading = <h2 className="Heading">{text1}</h2>;
  }

  return heading;
}
