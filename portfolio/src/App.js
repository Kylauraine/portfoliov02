import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
