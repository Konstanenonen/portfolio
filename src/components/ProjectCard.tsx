import React from "react";
import Styles from "./ProjectCard.module.css";
import code2 from "../images/code2.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard(): JSX.Element {
  return (
    <div className={Styles.card}>
      <img
        className={Styles.image}
        src={code2}
        alt="screen with React code in in"
      />
      <div className={Styles.textArea}>
        <div className={Styles.titleLevel}>
          <h3>Project Name</h3>
          <a href="https://github.com/Konstanenonen">
            <AiFillGithub />
          </a>
          <a href="">
            <FiExternalLink />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est libero,
          numquam asperiores officia magni dolores rem repellendus dolorem
          pariatur rerum iure, illum commodi sit corporis assumenda soluta a
          labore voluptatem!
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
