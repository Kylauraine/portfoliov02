import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
