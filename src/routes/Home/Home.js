import React from "react";

import "./Home.scss";

import Heading from "./../../components/UI/Heading/Heading";
import SocialIcon from "./../../components/UI/SocialIcon/SocialIcon";

export default function Home(props) {
  return (
    <section className="Home container">
      <div className="hero">
        <Heading text1="Thaison" text2="Dang" />
        <Heading text1="Frontend Web Developer" type="secondary" />
        <div>
          <SocialIcon
            name="fab fa-linkedin"
            color="white"
            link="https://www.linkedin.com/in/thai-son-dang/"
          />
          <SocialIcon
            name="fab fa-github"
            color="white"
            link="https://github.com/thaisonbk57"
          />
          <SocialIcon
            name="fab fa-codepen"
            color="white"
            link="https://codepen.io/thaisondangbk57/"
          />
        </div>
      </div>
    </section>
  );
}
