import React from "react";

import "./Projects.scss";

import Project from "./Project/Porject";

const projects = [
  {
    _id: 1,
    liveLink: "#",
    githubLink: "#",
    photoLink: "",
    name: "Demo Project"
  },
  {
    _id: 2,
    liveLink: "#",
    githubLink: "#",
    photoLink: "",
    name: "Demo Project"
  },
  {
    _id: 3,
    liveLink: "#",
    githubLink: "#",
    photoLink: "",
    name: "Demo Project"
  },
  {
    _id: 4,
    liveLink: "#",
    githubLink: "#",
    photoLink: "",
    name: "Demo Project"
  },
  {
    _id: 5,
    liveLink: "#",
    githubLink: "#",
    photoLink: "",
    name: "Demo Project"
  },
  {
    _id: 6,
    liveLink: "#",
    githubLink: "#",
    photoLink: "",
    name: "Demo Project"
  }
];

export default function Projects(props) {
  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <Project key={project._id} order={index} {...project} />
      ))}
    </div>
  );
}
