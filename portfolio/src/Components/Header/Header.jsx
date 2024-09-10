import React from "react";
import "./Header.scss";
import portrait from "../../Assets/portrait.jpg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__profile">
        <img className="Header__portrait" src={portrait} alt="Portrait" />
        <h1 className="Header__name">LAURA PRESTON</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
