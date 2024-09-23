import React from "react";
import "./Introduction.scss";
import background_intro from "../../Assets/background_intro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsDownToLine } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <section className="Introduction" id="introduction">
      <img className="Introduction__background" src={background_intro} alt="background" />
      <h2 className="Introduction__title">Développeuse web junior</h2>
      <p className="Introduction__text">Hey, je m'appelle Laura Preston. Je suis une développeuse web frontend en reconversion professionnelle.</p>
      <a href="#projects">
        <button className="Introduction__button">Projets</button>
      </a>
      <a href="#about">
        <FontAwesomeIcon className="Introduction__arrowsdown" icon={faArrowsDownToLine} />
      </a>
    </section>
  );
};

export default Introduction;
