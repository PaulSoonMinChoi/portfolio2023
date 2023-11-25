import React from "react";

// Import styles
import "../../css/header.css";

// Import our components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
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
    <section className="main-header flex px-[300px] py-[128px]">
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
  );
};

export default Header;
