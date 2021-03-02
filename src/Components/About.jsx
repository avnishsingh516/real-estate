import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image" />
      </div>
      <div className="about-text">
        <h2>
          We are the Best <br /> Real Estate Company
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
          cursus risus at ultrices. Rhoncus mattis rhoncus urna neque viverra
          justo nec ultrices dui. Quis blandit turpis cursus in hac habitasse
          platea dictumst. Ac tincidunt vitae semper quis.
        </p>
        <button>View More Details</button>
      </div>
    </div>
  );
}

export default About;
