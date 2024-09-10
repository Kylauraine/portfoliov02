import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="About">
      <h2 className="About__title">À propos</h2>
      <p className="About__text">Hey, je m'appelle Laura Preston. Je suis une développeuse web frontend en reconversion professionnelle.</p>
      <FontAwesomeIcon className="About__icon" icon={faGripLines} />
    </section>
  );
};

export default About;
