import React from "react";

import "./MyWorks.scss";

import Projects from "./../../components/Projects/Projects";
import Heading from "./../../components/UI/Heading/Heading";

export default function MyWorks(props) {
  return (
    <section className="MyWorks container">
      <Heading text1="My" text2="Works" />
      <Heading text1="Checkout some of my projects..." type="secondary" />
      <div className="py-3">
        <Projects />
      </div>
    </section>
  );
}
