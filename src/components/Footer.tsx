import React from "react";
import Styles from "./Footer.module.css";

function Footer(): JSX.Element {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.content}></div>
    </footer>
  );
}

export default Footer;
