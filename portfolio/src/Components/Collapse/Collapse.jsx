import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        {title} {isOpen ? "-" : "+"}
      </button>
      <div className={`collapse__content ${isOpen ? "open" : "close"}`}>{isOpen && <p>{children}</p>}</div>
    </div>
  );
};

export default Collapse;
