import React from "react";

export default function Paragraph(props) {
  const { color, fontSize, padding } = props;

  const style = {
    color,
    fontSize,
    padding
  };

  return <p style={style}>{props.children}</p>;
}
