import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { stackList } from "../../data/ProjectData";
import {
  ContactWrapper,
  Image,
  Tech,
  TechImg,
  TechName,
  Technologies,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/appleProfileMac.png" alt="profilePicture" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Prajakta Nisal</strong>. I'm originally
              from India, currently pursuing Master of Science, Computer Science
              from University of Texas, Arlington with over two years of
              experience as a Software Engineer at Deutsche Bank, India.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a strong
              passion for problem-solving, which led me to pursue the Computer
              Systems Technology program. Despite its challenges, I remained
              determined and forged lasting friendships that supported me
              throughout this demanding program. Throughout my studies at
              Cummins College of Engineering, I had the opportunity to engage in
              fascinating projects.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
