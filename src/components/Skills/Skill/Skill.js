import React from "react";

import "./Skill.scss";

export default function Skill(props) {
  const { skill, level, order } = props;

  return (
    <div className="Skill">
      <p className="Skill-name">{skill}</p>
      <div className="Skill-bar">
        <div
          style={{ width: `${level}%` }}
          className={`Skill-level Skill-level-${order}`}
        >
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
}
