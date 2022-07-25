import React, { Fragment } from "react";
import Info from "./Info";
import Skills from "./Skills";
import Experience from "./Experience";
import Works from "./Works";
import '../styles/Reset.scss'
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <Fragment>
      <Info />
      <Skills />
      <Works />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </Fragment>
  );
}

export default App;