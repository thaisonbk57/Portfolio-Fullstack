import React from "react";

import "./About.scss";

import Heading from "./../../components/UI/Heading/Heading";
import Logo from "./../../components/UI/Logo/Logo";
import Paragraph from "./../../components/UI/Paragraph/Paragraph";
import Skills from "./../../components/Skills/Skills";

export default function About(props) {
  return (
    <div className="About container">
      <Heading text1="About" text2="me" />
      <Heading text1="Get to know me..." type="secondary" />
      <div className="About--content py-5">
        <div className="row">
          <div className="col-4 col-md-12">
            <div className="Logo-wrapper">
              <Logo />
              <div className="py-3 text-center" />
            </div>
            <div className="py-3 text-center">
              <button className="ResumeDownloadBtn">
                <a href="./Resume.pdf" target="_blank">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className="col-8 col-md-12">
            <div className="py-1">
              <Heading
                fontSize="25px"
                text1="SUMMARY"
                color="rgba(231,210,27,1)"
              />
              <Paragraph
                style={{
                  color: "white",
                  fontSize: "18px",
                  padding: "5px 0 20px 0",
                  lineHeight: 1.5
                }}
              >
                I'm Thai Son Dang, a junior Frontend Developer with over 6
                months of experience in{" "}
                <b style={{ fontWeight: 600, color: "yellow" }}>MERN</b> stack,
                with good knowledge of{" "}
                <b style={{ fontWeight: 600, color: "yellow" }}>
                  HTML, CSS and Javascript
                </b>
                . <br />
                <br />
                Learning new languages and technologies is what I am passionate
                about (graduated from OpenClassroom. I have been self-taught
                most of the time). I like to help other and tend to work well
                within groups. I can also do some mentoring tasks because often
                time I make videos to summarize what I have learned under the
                aspect of beginners.
              </Paragraph>
            </div>
            <div className="py-1">
              <Heading
                fontSize="25px"
                text1="SKILLS"
                color="rgba(231,210,27,1)"
              />
              <div className="row">
                <div className="col-8 col-md-12 px-0">
                  <Skills />
                </div>
              </div>
            </div>
            {/* <div className="py-1">
              <Heading
                fontSize="25px"
                text1="INTERESTS"
                color="rgba(231,210,27,1)"
              />
              <Paragraph
                style={{
                  color: "white",
                  fontSize: "18px",
                  padding: "5px 0 20px 0"
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum hic, eligendi suscipit totam dolore nobis dicta id
                placeat, accusamus aliquid voluptas praesentium nulla libero
                cumque architecto maiores, ex neque? Incidunt!
              </Paragraph>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
