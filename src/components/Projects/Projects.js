import React from "react";

import "./Projects.scss";

import Project from "./Project/Porject";

const projects = [
  {
    _id: 1,
    liveLink: "#",
    githubLink: "#",
    photoLink: "#"
  },
  {
    _id: 2,
    liveLink: "#",
    githubLink: "#",
    photoLink: "#"
  },
  {
    _id: 3,
    liveLink: "#",
    githubLink: "#",
    photoLink: "#"
  },
  {
    _id: 4,
    liveLink: "#",
    githubLink: "#",
    photoLink: "#"
  },
  {
    _id: 5,
    liveLink: "#",
    githubLink: "#",
    photoLink: "#"
  },
  {
    _id: 6,
    liveLink: "#",
    githubLink: "#",
    photoLink: "#"
  }
];

export default function Projects(props) {
  return (
    <div className="Projects">
      {projects.map(project => (
        <Project {...project} />
      ))}
    </div>
  );
}
