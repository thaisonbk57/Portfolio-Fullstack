import React from "react";

export default function Paragraph(props) {
  const { style } = props;

  return <p style={style}>{props.children}</p>;
}
