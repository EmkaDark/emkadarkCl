import React from "react";
import Container from "../Container/Container";
import MyCard from "./MyCard/MyCard";
import styles from "./About.module.scss";
const About = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.about_container}>
        <MyCard></MyCard>
      </Container>
    </section>
  );
};

export default About;
