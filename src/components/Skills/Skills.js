import React from "react";

import "./Skills.scss";

import Skill from "./Skill/Skill";

export default function Skills() {
  return (
    <div className="Skill">
      <Skill skill="HTML" level="85" />
      <Skill skill="CSS" level="80" />
      <Skill skill="JS" level="80" />
      <Skill skill="ReactJS - Redux" level="75" />
      <Skill skill="NodeJS - ExpressJS" level="60" />
      <Skill skill="MongoDB - Mongoose" level="60" />
    </div>
  );
}
