import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <li className="Navbar__item">
          <a href="#introduction">Accueil</a>
        </li>
        <li className="Navbar__item">
          <a href="#about">À propos</a>
        </li>
        <li className="Navbar__item">
          <a href="#skills">Compétences</a>
        </li>
        <li className="Navbar__item">
          <a href="#projects">Projets</a>
        </li>
        <li className="Navbar__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
