import React from "react";
import Header from "./components/header/header/Header";
import Home from "./components/header/home/Home";
import About from "./components/header/about/About";
import Skills from "./components/header/skills/Skills";
import Services from "./components/header/services/Services";
import Work from "./components/header/work/Work";
import Contact from "./components/header/contact/Contact";
import "./App.css";
import Qualification from "./components/header/qualification/Qualification";
import Footer from "./components/header/footer/Footer";
import ScrollUp from "./components/header/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
