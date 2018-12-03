import React from "react";

import "./Projects.scss";

import Project from "./Project/Porject";

const projects = [
  {
    _id: 1,
    liveLink: "https://restaurant-review-app-bk57.firebaseapp.com/",
    githubLink:
      "https://github.com/thaisonbk57/Project-7-Review-Restaurants-App",
    photoLink: "p1.png",
    name: "Review Restaurants"
  },
  {
    _id: 2,
    liveLink: "https://restaurant-vietbowl.firebaseapp.com/",
    githubLink: "https://github.com/thaisonbk57/Vietbowl-Restaurant-Frontend",
    photoLink: "p2.png",
    name: "Vietbowl Restaurant"
  },
  {
    _id: 6,
    liveLink: "https://portfolio-thaisondang.firebaseapp.com/",
    githubLink: "https://github.com/thaisonbk57/Portfolio-Fullstack",
    photoLink: "p6.png",
    name: "Portfolio"
  },
  {
    _id: 4,
    liveLink: "https://film-festival-website.firebaseapp.com/",
    githubLink:
      "https://github.com/thaisonbk57/Project-3-Website-for-A-Film-Festival",
    photoLink: "p4.png",
    name: "Film Festival"
  },
  {
    _id: 3,
    liveLink: "https://tom-and-jerry-sp.firebaseapp.com/",
    githubLink:
      "https://github.com/thaisonbk57/Project-6-Build-a-turn-based-board-game",
    photoLink: "p3.png",
    name: "Tom & Jerry Game"
  },

  {
    _id: 5,
    liveLink: "https://todo-app-bk57.firebaseapp.com/",
    githubLink: "https://github.com/thaisonbk57/Todo",
    photoLink: "p5.png",
    name: "Todo App"
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
