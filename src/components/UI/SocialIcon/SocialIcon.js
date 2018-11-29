import React from "react";

import "./SocialIcon.scss";

export default function SocialIcon(props) {
  const { name, color, link } = props;

  return (
    <a
      className="SocialIcon"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i style={{ color }} className={name} />
    </a>
  );
}
