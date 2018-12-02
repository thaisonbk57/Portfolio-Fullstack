import React from "react";

import "./Project.scss";

import ProjectPhoto from "./../../../assets/imgs/projects/p1.jpeg";

export default function Porject(props) {
  const { liveLink, githubLink, photoLink, name, order } = props; //@TODO: use link passed from props

  return (
    <div className={`Project Project-${order} col-3 col-md-6 col-sm-12`}>
      <div className="Project--image">
        <img src={photoLink || ProjectPhoto} alt="project" />
        <p className="Project--name">{name}</p>
      </div>
      <div>
        <a
          className="Project--liveLink"
          href={liveLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-eye" /> Live
        </a>
        <a
          href={githubLink}
          className="Project--githubLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" /> Github
        </a>
      </div>
    </div>
  );
}
