import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <li className="Navbar__item">Accueil</li>
        <li className="Navbar__item">À propos</li>
        <li className="Navbar__item">Compétences</li>
        <li className="Navbar__item">Portfolio</li>
        <li className="Navbar__item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
