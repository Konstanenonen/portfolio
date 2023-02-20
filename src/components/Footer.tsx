import React from "react";
import { AiFillMail } from "react-icons/ai";
import Styles from "./Footer.module.css";

function Footer(): JSX.Element {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.section1}>
        <p className={Styles.title}>Contact me</p>
        <p className={Styles.normalText}>
          Please get in touch if you think our work could be mutually
          benefitical!
        </p>
        <p className={Styles.normalText}>
          <a href="konstanenonen@protonmail.com">
            <AiFillMail /> konstanenonen@protonmail.com
          </a>
        </p>
      </div>
      <div className={Styles.section2}></div>
    </footer>
  );
}

export default Footer;
