import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Header/NavBar";
import Intro from "./Hero/Intro";
import React from "react";
import AboutMe from "./Hero/AboutMe";
import ContactForm from "./Form/ContactForm";
import DisplayList from "./SelectionDisplay/DisplayList";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="appMain">
        <Intro />
        <AboutMe />
        <DisplayList />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
