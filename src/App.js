import "./App.css";
import NavBar from "./Header/NavBar";
import Intro from "./Main/Intro";
import React from "react";
import AboutMe from "./Main/AboutMe";
import SelectionBtn from "./Main/SelectionBtn";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <AboutMe />
      <SelectionBtn />
    </div>
  );
};

export default App;
