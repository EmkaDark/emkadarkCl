"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Typed.module.scss";
const TypedEl = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "сайтов",
        "лендингов",
        "многостраничников",
        "визиток",
        "интернет-магазинов",
      ],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      cursorChar: "!",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1 className={styles.header}>
      Профессиональное создание
      <span className={styles.header_span}>
        [<span ref={el}></span>]
      </span>
      под ключ
    </h1>
  );
};

export default TypedEl;
