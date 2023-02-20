import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import code from "../images/code.jpg";
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
          <a href="mailto:konstanenonen@protonmail.com">
            <AiFillMail className={Styles.icon} />
          </a>
          <a href="mailto:konstanenonen@protonmail.com">
            konstanenonen@protonmail.com
          </a>
        </p>
        <p className={Styles.normalText}>
          <FaPhoneAlt /> +358 40 220 3152
        </p>
        <p className={Styles.normalText}>
          <FaMapMarkerAlt /> Espoo, Finland
        </p>
      </div>
      <div className={Styles.section2}>
        <img src={code} />
      </div>
    </footer>
  );
}

export default Footer;
