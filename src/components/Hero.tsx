import React from "react";
import Styles from "./Hero.module.css";
import HeroPicture from "./HeroPicture";

function Hero(): JSX.Element {
  return (
    <div>
      <div className={Styles.background}></div>
      <HeroPicture />
    </div>
  );
}

export default Hero;
