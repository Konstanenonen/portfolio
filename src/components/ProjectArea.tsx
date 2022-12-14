import React from "react";
import Styles from "./ProjectArea.module.css";
import ProjectCard from "./ProjectCard";

function ProjectArea(): JSX.Element {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>My Work</h2>
      <div className={Styles.grid}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectArea;
