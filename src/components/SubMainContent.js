import React, { useState } from "react";
import "../css/image-carosel.css";

// Assets
import pic1 from "../public/twitch/project.jpeg";
import pic2 from "../public/mtndew/project.png";
import pic3 from "../public/mediaone/project.png";
import pic4 from "../public/waveform/project.webp";
import pic5 from "../public/sa/saproject.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  twitch1,
  twitch2,
  twitch3,
  twitch4,
  twitch5,
  twitch6,
} from "../public/twitch";
import {
  mtndew1,
  mtndew2,
  mtndew3,
  mtndew4,
  mtndew5,
  mtndew6,
} from "../public/mtndew";
import {
  mediaone1,
  mediaone2,
  mediaone3,
  mediaone4,
  mediaone5,
  mediaone6,
} from "../public/mediaone";
import {
  waveform1,
  waveform2,
  waveform3,
  waveform4,
  waveform5,
  waveform6,
} from "../public/waveform";

// Import our Components
import HorizontalScroll from "./horizontalScroll";

const SubMainContent = () => {
  const [nav, setNav] = useState("About");
  const [project, setProject] = useState("");

  const imgObj = {
    1: pic1,
    2: pic2,
    3: pic3,
    4: pic4,
    // 5: pic5,
  };

  const projectNames = {
    1: ["Twitch", "Software Engineer / Frontend"],
    2: ["Mtndew", "Freelance / Web Development"],
    3: ["Media One", "Freelance / Web Development"],
    4: ["Waveform", "Software Engineer / Frontend"],
    // 5: ["Soul Assassins", "Freelance / Web Development"],
  };

  const subPhotos = {
    Twitch: [twitch1, twitch2, twitch3, twitch4, twitch5, twitch6],
    Mtndew: [mtndew1, mtndew2, mtndew3, mtndew4, mtndew5, mtndew6],
    "Media One": [
      mediaone1,
      mediaone2,
      mediaone3,
      mediaone4,
      mediaone5,
      mediaone6,
    ],
    Waveform: [
      waveform1,
      waveform2,
      waveform3,
      waveform4,
      waveform5,
      waveform6,
    ],
    // "Soul Assassins": [twitch1, twitch2, twitch3, twitch4, twitch5, twitch6],
  };

  const SampleCards = React.memo(() =>
    Array(4)
      .fill(0)
      .map((_e, i) => (
        <>
          <div
            key={`sampleCard-${i}`}
            className={`project-card relative ${
              project === projectNames[i + 1][0]
                ? "h-[500px] w-[1200px]"
                : "h-[340px] w-[540px]"
            } mr-[70px] shrink-0`}>
            <div
              className={`img-box ${
                project === projectNames[i + 1][0] ? "hide-project" : ""
              }`}
              onClick={() => setProject(projectNames[i + 1][0])}>
              <img
                className="projects"
                alt="test"
                src={imgObj[i + 1]}
                draggable="false"
              />
              <div className="transparent-box">
                <div className="project-caption">
                  <p>{projectNames[i + 1][0]}</p>
                  <p className="opacity-low">{projectNames[i + 1][1]}</p>
                </div>
              </div>
            </div>
            {/* SHOW SUB PROJECT GALLERY PHOTOS */}
            <div className="project-sub-photos">
              <div className="gallery">
                {subPhotos[projectNames[i + 1][0]].map((photo, j) => {
                  return (
                    <img
                      className={`${
                        project === projectNames[i + 1][0]
                          ? `animate glow delay-${j + 1}`
                          : ""
                      }`}
                      src={photo}
                      alt={`${project}-${j}`}
                    />
                  );
                })}
              </div>
            </div>
            <div
              className={`${
                project === projectNames[i + 1][0]
                  ? "project-sub-photos-overlay"
                  : ""
              }`}
              onClick={() => setProject("")}></div>
          </div>
        </>
      ))
  );

  const waviyStyles = {
    1: {
      "--i": 1,
      animationDelay: `calc(.1s * var(--i))`,
    },
    2: {
      "--i": 2,
      animationDelay: `calc(.1s * var(--i))`,
    },
    3: {
      "--i": 3,
      animationDelay: `calc(.1s * var(--i))`,
    },
    4: {
      "--i": 4,
      animationDelay: `calc(.1s * var(--i))`,
    },
    5: {
      "--i": 5,
      animationDelay: `calc(.1s * var(--i))`,
    },
    6: {
      "--i": 6,
      animationDelay: `calc(.1s * var(--i))`,
    },
    7: {
      "--i": 7,
      animationDelay: `calc(.1s * var(--i))`,
    },
    8: {
      "--i": 8,
      animationDelay: `calc(.1s * var(--i))`,
    },
  };

  return (
    <div>
      {/* MAKE THIS ANOTHER COMPONENT 1*/}
      <section className="flex px-[300px] py-[128px]">
        <div className="waviy">
          <span style={waviyStyles[1]}>W</span>
          <span style={waviyStyles[2]}>E</span>
          <span style={waviyStyles[3]}>L</span>
          <span style={waviyStyles[4]}>C</span>
          <span style={waviyStyles[5]}>O</span>
          <span style={waviyStyles[6]}>M</span>
          <span style={waviyStyles[7]}>E</span>
          <span style={waviyStyles[8]}>.</span>
        </div>

        <ul className="icon-list">
          <li>
            <a href="mailto:paulsoonminchoi@gmail.com?subject=Mail from Portfolio Website">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/paulsoonminchoi/">
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/PaulSoonMinChoi">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </li>
        </ul>
      </section>

      <section className="info-section flex px-[400px] pb-[200px] min-h-[500px] max-h-[500px]">
        <div className="info-section-container flex">
          <div className="main-text-container h-[300px] w-[760px] relative">
            {/* ABOUT TAB */}
            <div
              className={`info-text-container flex flex-col justify-center pr-[30px] ${
                nav === "About" ? "showNav" : ""
              }`}>
              <span className="header-info text-base leading-6">About :</span>
              <span className="info-text text-base leading-6">
                I'm Paul Choi, a software engineer and freelancer located in
                Orange County and Los Angeles, California, USA. With a
                background in developing and contributing to various
                applications within the Esports and Broadcasting solutions
                sectors, I am dedicated to crafting innovative, user-centric
                interfaces that elevate the overall experience.
              </span>
              <span className="info-text text-base leading-6">
                I've long held a deep fascination with the entertainment and
                esports landscape due to its enduring challenge and
                ever-evolving nature. I'm open to diverse landscapes as long as
                they hold the potential to make a meaningful impact on the world
                and its users.
              </span>
            </div>

            {/* CONTACT TAB */}
            <div
              className={`info-text-container flex flex-col justify-center pr-[30px] ${
                nav === "Contact" ? "showNav" : ""
              }`}>
              <span className="header-info text-base leading-6">Contact :</span>
              <span className="info-text text-base leading-6">
                If you're interested in collaborating with me or need a
                well-crafted website, don't hesitate to reach out!
              </span>
              <span className="info-text text-base leading-6">
                Email:{" "}
                <a
                  className="link"
                  href="mailto:paulsoonminchoi@gmail.com?subject=Mail from Portfolio Website">
                  paulsoonminchoi@gmail.com
                </a>
              </span>
              <span className="info-text text-base leading-6">
                Other contact info:{" "}
                <a
                  className="link"
                  href="https://www.linkedin.com/in/paulsoonminchoi/">
                  LinkedIn
                </a>{" "}
                /
                <a className="link" href="https://github.com/PaulSoonMinChoi">
                  GitHub
                </a>
              </span>
            </div>

            {/* FAQ TAB */}
            <div
              className={`info-text-container flex flex-col justify-center pr-[30px] ${
                nav === "FAQ" ? "showNav" : ""
              }`}>
              <span className="header-info text-base leading-6">FAQ :</span>
              <span className="info-text text-base leading-6 font-bold">
                How much experience do you have?
              </span>
              <span className="info-text text-base leading-6">
                A: 4 years of experience as a software engineer / frontend
                engineer
              </span>

              <span className="info-text text-base leading-6 font-bold">
                What are some of your skills?
              </span>
              <span className="info-text text-base leading-6">
                A: React / Node.js / Typescript / Next.js / Javascript / Html &
                CSS / Tailwind / Docker / UI/UX Design / User Research / Agile
                Methodologies / Collaboration / CMS Design & Architecure
              </span>
            </div>

            {/* Interests TAB */}
            <div
              className={`info-text-container flex flex-col justify-center pr-[30px] ${
                nav === "Interests" ? "showNav" : ""
              }`}>
              <span className="header-info text-base leading-6">
                Interests :
              </span>
              <span className="info-text text-base leading-6">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages.
              </span>
              <span className="info-text text-base leading-6">
                I'm passionate about intrinsic, cutting-edge interfaces that
                enhances the user's experience. I'm passionate about intrinsic,
                cutting-edge interfaces that enhances the user's experience.
              </span>
            </div>

            {/* Resume TAB */}
            <div
              className={`info-text-container flex flex-col justify-center pr-[30px] ${
                nav === "Resume" ? "showNav" : ""
              }`}>
              <span className="header-info text-base leading-6">Resume :</span>
              {/* <span className="info-text text-base leading-6">
                My current resume.
              </span> */}
              <a
                className="btn"
                href="https://drive.google.com/file/d/1mMQBAZBl0QM2-D7IW6e3vz3KP_7GuA0X/view?usp=sharing"
                rel="noreferrer"
                target="_blank">
                My Resume
              </a>
            </div>
          </div>

          <div className="navigation-container">
            <div className="navigation-sub-container flex justify-end mt-[10px] ">
              <p className="navigation" onClick={() => setNav("About")}>
                About
              </p>
            </div>
            <div className="navigation-sub-container flex justify-end mt-[10px]">
              <p className="navigation" onClick={() => setNav("Contact")}>
                Contact
              </p>
            </div>
            <div className="navigation-sub-container flex justify-end mt-[10px]">
              <p className="navigation" onClick={() => setNav("FAQ")}>
                FAQ
              </p>
            </div>
            {/* <div className="navigation-sub-container flex justify-end mt-[10px]">
              <p className="navigation" onClick={() => setNav("Interests")}>
                Interests
              </p>
            </div> */}
            <div className="navigation-sub-container flex justify-end mt-[10px]">
              <p className="navigation" onClick={() => setNav("Resume")}>
                Resume
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAKE THIS ANOTHER COMPONENT 2*/}
      <section className="relative w-full min-h-screen">
        <div className="header-container">
          <FontAwesomeIcon className="arrow-down" icon={faArrowDown} />
          <span className="header">Experience</span>
          <FontAwesomeIcon className="arrow-down" icon={faArrowDown} />
        </div>

        <HorizontalScroll>
          <div className="relative h-full pl-[150px] flex justify-start	items-center">
            <SampleCards />
          </div>
        </HorizontalScroll>
      </section>
    </div>
  );
};

export default SubMainContent;
