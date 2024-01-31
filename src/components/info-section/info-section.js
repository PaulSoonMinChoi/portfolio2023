import React, { useState } from "react";
import "../../css/info-section.css";

const InfoSection = () => {
  const [nav, setNav] = useState("About");

  return (
    <section className="info-section flex pb-[200px]">
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
              Orange County and Los Angeles, California, USA. With a background
              in developing and contributing to various applications within the
              Esports and Broadcasting solutions sectors, I am dedicated to
              crafting innovative, user-centric interfaces that elevate the
              overall experience.
            </span>
            <span className="info-text text-base leading-6">
              I've long held a deep fascination with the entertainment and
              esports landscape due to its enduring challenge and ever-evolving
              nature. I'm open to diverse landscapes as long as they hold the
              potential to make a meaningful impact on the world and its users.
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
            <span className="header-info text-base leading-6">Interests :</span>
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
              href="https://drive.google.com/file/d/1FJ7ZWwBTvHGq5zoX_c50aa6IU332GP9I/view?usp=sharing"
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
  );
};

export default InfoSection;
