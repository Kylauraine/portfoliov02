import React from "react";
import "./Footer.scss";
import logolight from "../../Assets/logo-light.png";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Footer__text">© 2024 Laura Preston</p>
      <img className="Footer__logo" src={logolight} alt="logo" />
    </div>
  );
};

export default Footer;
