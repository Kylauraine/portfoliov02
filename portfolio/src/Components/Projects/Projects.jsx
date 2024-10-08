import React from "react";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faSass } from "@fortawesome/free-brands-svg-icons";
import ecran_booki from "../../Assets/ecran_booki.png";
import ecran_bluel from "../../Assets/ecran_bluel.png";
import ecran_kasa from "../../Assets/ecran_kasa.png";
import ecran_grimoire from "../../Assets/ecran_grimoire.png";
import Collapse from "../Collapse/Collapse";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">Projets</h2>
      <div className="projects__container">
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran_booki} alt="ecran" />

          <div className="projects__container__project__text">
            <h3>
              <a href="https://github.com/Kylauraine/Projet-2-HTML-CSS-Booki" target="_blank" rel="noreferrer">
                {" "}
                Booki
              </a>{" "}
              <FontAwesomeIcon icon={faHtml5} /> <FontAwesomeIcon icon={faCss3Alt} />
            </h3>

            <Collapse
              title="En savoir plus"
              children="Mise en place d'un environnement Front-end, Intégration en HTML/CSS d'une maquette Figma, Intégration responsive pour desktop, tablette et mobile. "
            />
          </div>
        </div>
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran_bluel} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>
              <a href="https://github.com/Kylauraine/Projet-JS" target="_blank" rel="noreferrer">
                {" "}
                Sophie Bluel
              </a>{" "}
              <FontAwesomeIcon icon={faJs} />
            </h3>

            <Collapse
              title="En savoir plus"
              children="Création d'une page web dynamique, manipulation du DOM, gestion des événements, création de modales, ajout/suppression des travaux sans raffraîchissement de la page."
            />
          </div>
        </div>
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran_kasa} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>
              <a href="https://github.com/Kylauraine/kasa" target="_blank" rel="noreferrer">
                Kasa
              </a>{" "}
              <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faSass} />
            </h3>

            <Collapse
              title="En savoir plus"
              children="Création d'une application avec Create React App, configuration de la navigation avec React Router, organisation des fichiers et dossiers des composants, création d'un Slider, utilisation d'un fichier Data pour mise à jour efficace et automatique des contenus, utilisation de Sass"
            />
          </div>
        </div>
        <div className="projects__container__project">
          <img className="projects__container__project__img" src={ecran_grimoire} alt="ecran" />
          <div className="projects__container__project__text">
            <h3>
              <a href="https://github.com/Kylauraine/backend" target="_blank" rel="noreferrer">
                Mon Vieux Grimoire
              </a>{" "}
              <FontAwesomeIcon icon={faNodeJs} />
            </h3>
            <Collapse
              title="En savoir plus"
              children="Mise en oeuvre d'opérations CRUD et stockage sécurisé de données, création d'une API RESTful, utilisation de MongoDB pour stocker les données, utilisation de Mongoose pour définir les modèles de données, utilisation de Express pour gérer les routes, utilisation de Bcrypt pour chiffrer les mots de passe, utilisation de JWT pour sécuriser les échanges."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
