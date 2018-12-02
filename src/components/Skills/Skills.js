import React from "react";

import "./Skills.scss";

import Skill from "./Skill/Skill";

const skills = [
  {
    name: "HTML5",
    level: "85"
  },
  {
    name: "CSS (SCSS)",
    level: "80"
  },
  {
    name: "Javascript",
    level: "80"
  },
  {
    name: "Bootstrap",
    level: "70"
  },
  {
    name: "ReactJS - Redux",
    level: "75"
  },
  {
    name: "NodeJS (ExpressJS)",
    level: "75"
  },
  {
    name: "MongoDB (Mongoose)",
    level: "60",
    id: 7
  }
];

export default function Skills() {
  const skillSet = skills.map((skill, index) => (
    <Skill
      key={skill.name}
      skill={skill.name}
      level={skill.level}
      order={index}
    />
  ));

  return <div className="Skill">{skillSet}</div>;
}
