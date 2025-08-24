"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import Burger from "../Burger/Burger";
const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const clickHandler = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <header className={styles.header} role="banner"
  aria-label="Основная навигация">
      <Container className="flex justify-between">
        <Link href={"/"} className={styles.logo_link}>
          <Image
            src={"/logo.svg"}
            width={100}
            height={80}
            alt="ED Logo"
          ></Image>
        </Link>
        <Navigation />

        <Burger isActive={isActive} clickHandler={clickHandler}></Burger>
      </Container>
      <MobileMenu isActive={isActive} onClose={clickHandler}></MobileMenu>
    </header>
  );
};

export default Header;
