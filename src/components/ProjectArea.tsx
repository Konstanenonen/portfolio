import React from "react";
import Styles from "./ProjectArea.module.css";

function ProjectArea(): JSX.Element {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>My Work</h2>
      <div className={Styles.grid}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default ProjectArea;
