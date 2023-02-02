import React from "react";
import Styles from "./Footer.module.css";

function Footer(): JSX.Element {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.title}>Contact me</p>
      <p className={Styles.normalText}>
        Please get in touch if you think our work could be mutually benefitical!
      </p>
    </footer>
  );
}

export default Footer;
