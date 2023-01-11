import "./App.css";
import NavBar from "./Header/NavBar";
import Intro from "./Hero/Intro";
import React from "react";
import AboutMe from "./Hero/AboutMe";
//import SelectionBtn from "./SelectionDisplay/SelectionBtn";
import ContactForm from "./Form/ContactForm";
import DisplayList from "./SelectionDisplay/DisplayList";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <AboutMe />
      <DisplayList />
      {/* <ContactForm /> */}
    </div>
  );
};

export default App;
