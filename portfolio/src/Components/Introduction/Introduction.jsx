import React from "react";
import "./Introduction.scss";
import background_intro from "../../Assets/background_intro.png";

const Introduction = () => {
  return (
    <section className="Introduction">
      <img className="Introduction__background" src={background_intro} alt="background" />
      <h2 className="Introduction__title">À propos</h2>
      <p className="Introduction__text">LLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lacinia</p>
    </section>
  );
};

export default Introduction;
