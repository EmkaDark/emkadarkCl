import Container from "@/components/Container/Container";
import React from "react";
import Serv from "../Serv/Serv";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero_container}>
        <h1 className={styles.hero_header}> Массив услуг:</h1>
        <Serv></Serv>
      </Container>
    </section>
  );
};

export default Hero;
