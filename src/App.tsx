import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import ProjectArea from "./components/ProjectArea";

function App(): JSX.Element {
  return (
    <div className="App">
      <Hero />
      <ProjectArea />
      <div>test</div>
    </div>
  );
}

export default App;
