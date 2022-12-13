import React from "react";
import Styles from "./HeroPicture.module.css";
import code from "../images/code.jpg";

function HeroPicture(): JSX.Element {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
        <img
          className={Styles.image}
          src={code}
          alt="computer screen with React code"
        />
        <h1 className={Styles.title}>Konsta Nenonen</h1>
      </div>
      <div className={Styles.textArea}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          possimus molestiae ipsum porro blanditiis ipsa, magnam, cum nihil
          dolor ipsam numquam error at eius, quae quia odio quidem harum
          mollitia maiores vero! Neque sed, sapiente expedita, modi natus
          delectus reiciendis repudiandae architecto doloribus consequatur
          mollitia! Quo, illo consequatur dolorem consectetur quisquam impedit
          obcaecati quos pariatur ratione repellendus eum voluptatibus
          voluptatem molestiae laborum, tenetur perferendis, corporis numquam
          quia ipsum nobis animi. Temporibus ut quod culpa! Voluptate
          repellendus possimus corporis ea aspernatur earum in modi voluptatem
          deleniti reprehenderit? Pariatur ad beatae cumque ullam reprehenderit
          dolores non a, debitis, praesentium rem quaerat esse.
        </p>
      </div>
    </div>
  );
}

export default HeroPicture;
