import React from "react";

import "./Project.scss";

import ProjectPhoto from "./../../../assets/imgs/projects/p1.jpeg";

export default function Porject(props) {
  const { liveLink, githubLink, photoLink, _id } = props;

  return (
    <div className="Project col-3">
      <div className="Project--image">
        <img src={ProjectPhoto} alt="project" />
      </div>
      <div>
        <a
          className="Project--liveLink"
          href={liveLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fas fa-eye" /> Live
        </a>
        <a
          href={githubLink}
          className="Project--githubLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github" /> Github
        </a>
      </div>
    </div>
  );
}
