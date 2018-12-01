import React from "react";

import "./Skills.scss";

import Skill from "./Skill/Skill";

const skills = [
  {
    name: "HTML5",
    level: "85",
    id: 1
  },
  {
    name: "CSS (SCSS)",
    level: "80",
    id: 2
  },
  {
    name: "Javascript",
    level: "80",
    id: 3
  },
  {
    name: "Bootstrap",
    level: "70",
    id: 4
  },
  {
    name: "ReactJS - Redux",
    level: "75",
    id: 5
  },
  {
    name: "NodeJS (ExpressJS)",
    level: "75",
    id: 6
  },
  {
    name: "MongoDB (Mongoose)",
    level: "60",
    id: 7
  }
];

export default function Skills() {
  const skillSet = skills.map(skill => (
    <Skill
      key={skill.name}
      skill={skill.name}
      level={skill.level}
      id={skill.id}
    />
  ));

  return <div className="Skill">{skillSet}</div>;
}
