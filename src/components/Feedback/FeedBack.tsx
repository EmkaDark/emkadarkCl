"use client";
import React, { use, useState } from "react";
import Container from "../Container/Container";
import Form from "./Form/Form";
import styles from "./Feedback.module.scss";
import Alert from "./Alert";

const FeedBack = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const close = () => {
    setIsActive(false);
  };
  const open = () => {
    console.log("ok");
    setIsActive(true);
  };
  return (
    <section className={styles.feedback} id="feedback">
      <Container className={styles.feedback_container}>
        <h2 className={styles.feedback_header}>Оставить заявку:</h2>
        <Form open={open}></Form>
      </Container>
      <Alert isActive={isActive} close={close}></Alert>
    </section>
  );
};

export default FeedBack;
