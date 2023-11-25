import React from "react";
import "../css/landing.css";

// Import our Components
import { Header } from "./header";
import { InfoSection } from "./info-section";
import { ProjectSection } from "./project-section";

const Landing = () => {
  return (
    <div>
      <Header />
      <InfoSection />
      <ProjectSection />
    </div>
  );
};

export default Landing;
