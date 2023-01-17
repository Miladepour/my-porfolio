import "./App.css";
import NavBar from "./Header/NavBar";
import Intro from "./Hero/Intro";
import React from "react";
import AboutMe from "./Hero/AboutMe";
import ContactForm from "./Form/ContactForm";
import DisplayList from "./SelectionDisplay/DisplayList";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Intro />
        <AboutMe />
        <DisplayList />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
