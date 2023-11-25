import React, { useState } from "react";

// Import styles
import "../../css/project-section.css";

// Import our components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import HorizontalScroll from "./horizontalScroll";
import pic1 from "../../public/twitch/project.jpeg";
import pic2 from "../../public/mtndew/project.png";
import pic3 from "../../public/mediaone/project.png";
import pic4 from "../../public/waveform/project.webp";
import {
  twitch1,
  twitch2,
  twitch3,
  twitch4,
  twitch5,
  twitch6,
} from "../../public/twitch";
import {
  mtndew1,
  mtndew2,
  mtndew3,
  mtndew4,
  mtndew5,
  mtndew6,
} from "../../public/mtndew";
import {
  mediaone1,
  mediaone2,
  mediaone3,
  mediaone4,
  mediaone5,
  mediaone6,
} from "../../public/mediaone";
import {
  waveform1,
  waveform2,
  waveform3,
  waveform4,
  waveform5,
  waveform6,
} from "../../public/waveform";

const ProjectSection = () => {
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

  return (
    <section className="relative w-full min-h-screen">
      <div className="header-container">
        <FontAwesomeIcon className="arrow-down" icon={faArrowDown} />
        <div className="flex flex-col items-center">
          <span className="header">Experience</span>
          <span className="header-sub-text">
            Continue to Scroll down to view
          </span>
        </div>
        <FontAwesomeIcon className="arrow-down" icon={faArrowDown} />
      </div>

      <HorizontalScroll>
        <div className="relative h-full pl-[150px] flex justify-start	items-center">
          <SampleCards />
        </div>
      </HorizontalScroll>
    </section>
  );
};

export default ProjectSection;
