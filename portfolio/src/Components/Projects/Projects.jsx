import React from "react";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import ecran from "../../Assets/ecran.png";

const Projects = () => {
  return (
    <div className="projects">
      <FontAwesomeIcon className="projects__icon" icon={faGripLines} />
      <h2 className="projects__title">Projets</h2>
      <div className="projects__container">
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>HTML/CSS</h3>
            <p>Intégration responsive en HTML/CSS d'une maquette Figma</p>
          </div>
        </div>
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>JavaScript</h3>
            <p>Création d'une page web dynamique, manipulation du DOM et gestion des événements</p>
          </div>
        </div>
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>React</h3>
            <p>Création d'une application avec Create React App, configuration de la navigation avec React Router, utilisation de Sass</p>
          </div>
        </div>
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>Backend</h3>
            <p>Mise en oeuvre d'opérations CRUD et stockage sécurisé de données</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
