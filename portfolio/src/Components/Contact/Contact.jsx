import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <FontAwesomeIcon className="projects__icon" icon={faGripLines} />
      <h2 className="contact__title">Contact</h2>
      <div className="contact__container">
        <div className="contact__container__info">
          <h3>Localisation</h3>
          <p>Paris, Val-de-Marne, Seine-Saint-Denis, Seine-et-Marne</p>
        </div>
        <div className="contact__container__info">
          <h3>Email</h3>
          <p>
            <a href="mailto: preston.laura92@gmail.com">Ici</a>
          </p>
          <div className="contact__container__info">
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/laura-preston/">Ici</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
