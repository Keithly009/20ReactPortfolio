import React from "react";
import AboutMe from "./Components/Aboutme"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
