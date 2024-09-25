import React, { useState } from "react";
import "./Header.scss";
import portrait from "../../Assets/portrait.jpg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <div className="Header__profile">
        <img className="Header__portrait" src={portrait} alt="Portrait" />
        <h1 className="Header__name">LAURA PRESTON</h1>
      </div>

      {/* Navbar toujours visible sur grand écran */}
      <div className="Header__navbar">
        <Navbar />
      </div>

      {/* Bouton pour ouvrir/fermer le menu en mode mobile */}
      <button className="Header__menuButton" onClick={toggleMenu}>
        Menu
      </button>

      {/* Navbar cachée en collapse pour mobile */}
      {isMenuOpen && (
        <div className="Header__collapseMenu">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
