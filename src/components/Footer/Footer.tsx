import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer_container}>
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={100}
            height={80}
            alt="ED Logo"
          ></Image>
        </Link>
        <div className={styles.footer_feedback}>
          <h3 className={styles.footer_header}>Обратная связь: </h3>
          <div className={styles.footer_icons}>
            <a
              aria-label="перейти в whatsapp"
              className={styles.footer_link}
              href="https://wa.me/79679531649?text=Добрый день!"
              rel="noopener noreferer"
              target="_blank"
            >
              <FaWhatsapp className={styles.footer_icon} />
            </a>

            <a
              className={styles.footer_link}
              aria-label="перейти в telegram"
              href="https:/t.me/EmkaDark?text=Добрый день!"
              rel="noopener noreferer"
              target="_blank"
            >
              <FaTelegramPlane className={styles.footer_icon} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
