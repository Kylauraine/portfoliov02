import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
    </div>
  );
}

export default App;
