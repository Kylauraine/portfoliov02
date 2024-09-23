import React, { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  useEffect(() => {
    const originalTitle = document.title;

    // Gestion du changement de visibilité
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Hey ! Revenez !";
      } else {
        document.title = originalTitle;
      }
    };

    // Ajout de l'écouteur d'événement
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Nettoyage de l'écouteur d'événement à la destruction du composant
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle; // Restauration du titre original
    };
  }, []); // Le tableau vide assure que cet effet s'exécute une seule fois

  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
