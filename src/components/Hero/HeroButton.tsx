"use client";
import React from "react";
import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import Link from "next/link";
const HeroButton = () => {
  const clickHandler = () => {
    alert("ok");
  };
  return (
    <div className={styles.hero_div}>
      <Link
        // text="Связаться сомной"
        // onClick={clickHandler}
        className={styles.hero_button}
        // aria="Связаться сомной"
        href={"#feedback"}
        aria-label="Оставить заявку"
      >
        Оставить заявку
      </Link>
    </div>
  );
};

export default HeroButton;
