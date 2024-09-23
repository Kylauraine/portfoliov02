import React from "react";
import "./Footer.scss";
import logolight from "../../Assets/logo-light.png";
import lampe from "../../Assets/lampe.jpg";

const Footer = () => {
  return (
    <section>
      <div className="Footer">
        <div className="Footer__copyright">
          <p className="Footer__text">© 2024 Laura Preston</p>
          <img className="Footer__logo" src={logolight} alt="logo" />
        </div>
        <div className="thanks">
          <p> Merci à John pour ses conseils et sa bienveillance tout au long de ma formation.</p>
          <img className="thanks__lamp" src={lampe} alt="lampe" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
