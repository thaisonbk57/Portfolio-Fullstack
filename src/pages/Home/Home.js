import React from "react";

import "./Home.scss";

import Heading from "./../../components/UI/Heading/Heading";
import SocialIcon from "./../../components/UI/SocialIcon/SocialIcon";

const socialMedia = [
  {
    source: "linkedIn",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/thai-son-dang/"
  },
  {
    source: "github",
    icon: "fab fa-github",
    link: "https://github.com/thaisonbk57"
  },
  {
    source: "codepen",
    icon: "fab fa-codepen",
    link: "https://codepen.io/thaisondangbk57/"
  }
];

export default function Home(props) {
  const socialIcons = socialMedia.map(source => (
    <SocialIcon key={source.source} name={source.icon} link={source.link} />
  ));

  return (
    <section className="Home container">
      <div className="hero">
        <Heading text1="Thaison" text2="Dang" />
        <Heading text1="Frontend Web Developer" type="secondary" />
        <div>{socialIcons}</div>
      </div>
    </section>
  );
}
