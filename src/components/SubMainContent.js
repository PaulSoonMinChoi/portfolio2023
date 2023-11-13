import React, { useEffect, useState } from "react";
import "../css/image-carosel.css";

// Assets
import pic1 from "../public/carosel-images/twitchrivalsproject.jpeg";
import pic2 from "../public/carosel-images/mtndewproject.png";
import pic3 from "../public/carosel-images/mediaonetestproject.png";
import pic4 from "../public/carosel-images/saproject.png";
import pic5 from "../public/carosel-images/waveformproject.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// Import our Components
import HorizontalScroll from "./horizontalScroll";

const SubMainContent = () => {
  const [nav, setNav] = useState("About");

  const imgObj = {
    1: pic1,
    2: pic2,
    3: pic3,
    4: pic4,
    5: pic5,
  };

  const SampleCards = React.memo(() =>
    Array(5)
      .fill(0)
      .map((_e, i) => (
        <div
          key={`sampleCard-${i}`}
          className="project-card relative h-[300px] w-[500px] mr-[70px] shrink-0	bg-slate-500">
          <img
            className="projects"
            alt="test"
            src={imgObj[i + 1]}
            draggable="false"
          />
        </div>
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
        <div className="main-text-container h-[300px] w-[760px] relative">
          {/* ABOUT TAB */}
          <div
            className={`info-text-container flex flex-col justify-center pr-[30px] ${
              nav === "About" ? "showNav" : ""
            }`}>
            <span className="info-text text-base leading-6">
              My name is Paul Choi, I'm a software engineer / freelancer based
              in Orange County / Los Angeles, CA, US. I have developed and
              worked on many applications in the Esports / Broadcasting
              solutions platforms.
            </span>
            <span className="info-text text-base leading-6">
              I'm passionate about intrinsic, cutting-edge interfaces that
              enhances the user's experience. I'm passionate about intrinsic,
              cutting-edge interfaces that enhances the user's experience. I'm
              passionate about intrinsic, cutting-edge interfaces that enhances
              the user's experience. I'm passionate about intrinsic,
              cutting-edge interfaces that enhances the user's experience. I'm
              passionate about intrinsic, cutting-edge interfaces that enhances
              the user's experience.
            </span>
          </div>

          {/* CONTACT TAB */}
          <div
            className={`info-text-container flex flex-col justify-center pr-[30px] ${
              nav === "Contact" ? "showNav" : ""
            }`}>
            <span className="info-text text-base leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
            <span className="info-text text-base leading-6">
              I'm passionate about intrinsic, cutting-edge interfaces that
              enhances the user's experience.
            </span>
          </div>

          {/* FAQ TAB */}
          <div
            className={`info-text-container flex flex-col justify-center pr-[30px] ${
              nav === "FAQ" ? "showNav" : ""
            }`}>
            <span className="info-text text-base leading-6">FAQ FAW</span>
            <span className="info-text text-base leading-6">
              I'm passionate about intrinsic, cutting-edge interfaces that
              enhances the user's experience. I'm passionate about intrinsic,
              cutting-edge interfaces that enhances the user's experience. I'm
              passionate about intrinsic, cutting-edge interfaces that enhances
              the user's experience. I'm passionate about intrinsic,
              cutting-edge interfaces that enhances the user's experience. I'm
              passionate about intrinsic, cutting-edge interfaces that enhances
              the user's experience.
            </span>
          </div>

          {/* BloodBath TAB */}
          <div
            className={`info-text-container flex flex-col justify-center pr-[30px] ${
              nav === "BloodBath" ? "showNav" : ""
            }`}>
            <span className="info-text text-base leading-6">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages.
            </span>
            <span className="info-text text-base leading-6">
              I'm passionate about intrinsic, cutting-edge interfaces that
              enhances the user's experience. I'm passionate about intrinsic,
              cutting-edge interfaces that enhances the user's experience.
            </span>
          </div>
        </div>

        <div className="navigation-container pr-[50px]">
          <div className="navigation-sub-container flex justify-end">
            <p className="navigation" onClick={() => setNav("About")}>
              About
            </p>
          </div>
          <div className="navigation-sub-container flex justify-end">
            <p className="navigation" onClick={() => setNav("Contact")}>
              Contact
            </p>
          </div>
          <div className="navigation-sub-container flex justify-end">
            <p className="navigation" onClick={() => setNav("FAQ")}>
              FAQ
            </p>
          </div>
          <div className="navigation-sub-container flex justify-end">
            <p className="navigation" onClick={() => setNav("BloodBath")}>
              BloodBath
            </p>
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
            {/* <div className='relative h-[300px] w-[500px] mr-[70px] shrink-0	'>
            </div> */}
            <SampleCards />
          </div>
        </HorizontalScroll>
      </section>
    </div>
  );
};

export default SubMainContent;
