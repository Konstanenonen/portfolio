import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectArea from "./components/ProjectArea";

function App(): JSX.Element {
  return (
    <div className="App">
      <Hero />
      <ProjectArea />
      <Footer />
    </div>
  );
}

export default App;
