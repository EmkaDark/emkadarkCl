import React from "react";
import Container from "../Container/Container";
import Technology from "./teсhnology/Technology";
import styles from "./Stack.module.scss";
const Stack = () => {
  return (
    <section className={styles.stack}>
      <Container className={styles.stack_container}>
        <h2 className={styles.stack_header}>Стек технологий: </h2>
        <Technology></Technology>
      </Container>
    </section>
  );
};

export default Stack;
