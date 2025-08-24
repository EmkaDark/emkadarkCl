import React from "react";
import Container from "../Container/Container";
import Typed from "../Typed/Typed";
import HeroButton from "./HeroButton";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Video from "../video/Video";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero_container}>
        <Video></Video>
        <div className={styles.hero_content}>
          <Typed></Typed>
          <p className={styles.hero_desk}>
            А также работы по доработке и оптимизации сайтов!
          </p>
          <HeroButton></HeroButton>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
