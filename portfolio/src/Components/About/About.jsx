import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="About" id="about">
      <h2 className="About__title">À propos</h2>
      <p className="About__text">
        Je m'appelle Laura Preston, développeuse web junior en reconversion professionnelle. Après six années en tant que Community Manager et
        Consultante Social Media, j'ai décidé de suivre ma passion pour la technologie et me former au développement web.
      </p>
      <p className="About__text">
        Ma formation m'a permis d'acquérir des compétences solides en HTML, CSS, JavaScript, ainsi que dans des frameworks comme React. Mon objectif
        est de créer des sites web à la fois fonctionnels et esthétiques, en plaçant toujours l'expérience utilisateur au cœur de mes réalisations.
      </p>
      <p className="About__text">
        Je suis constamment à l'affût des dernières tendances et je m'efforce d'améliorer mes compétences pour répondre aux besoins variés des
        clients.
      </p>
      <p className="About__text__bold">
        Que vous ayez un projet en tête ou que vous cherchiez simplement à en savoir plus sur mon parcours, n'hésitez pas à me contacter !
      </p>
      <div className="About__social">
        <a href="https://www.linkedin.com/in/laura-preston/">
          <FontAwesomeIcon className="About__icon" icon={faLinkedin} />
        </a>
        <a href="https://github.com/Kylauraine">
          <FontAwesomeIcon className="About__icon" icon={faSquareGithub} />
        </a>
      </div>
    </section>
  );
};

export default About;
