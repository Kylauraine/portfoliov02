import React from "react";
import "./Skills.scss";
import logodark from "../../Assets/logo-dark.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <img className="skills__logo" src={logodark} alt="logo" />
      <div className="skills__global_container">
        <h2 className="skills__title">Compétences</h2>
        <div className="skills__container">
          <div className="skills__container__skill">
            <h3>HTML</h3>
          </div>
          <div className="skills__container__skill">
            <h3>CSS/Sass</h3>
          </div>

          <div className="skills__container__skill">
            <h3>JavaScript</h3>
          </div>
          <div className="skills__container__skill">
            <h3>React</h3>
          </div>
          <div className="skills__container__skill">
            <h3>Node.JS</h3>
          </div>
          <div className="skills__container__skill">
            <h3>GitHub</h3>
          </div>
          <div className="skills__container__skill">
            <h3>Accessibilité</h3>
          </div>
          <div className="skills__container__skill">
            <h3>SEO</h3>
          </div>
          <div className="skills__container__skill">
            <h3>Anglais</h3>
          </div>
          <div className="skills__container__skill">
            <h3>Community Management</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
