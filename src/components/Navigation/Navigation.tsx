"use client";
import React, { FC, useState } from "react";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const router = usePathname();

  const links = [
    { href: "/", label: "Главная", id: 1, aria: "Главная страница" },
    { href: "/services", label: "Услуги", id: 2, aria: "страницы услуг" },
    { href: "/about", label: "Обо мне", id: 3, aria: "страница обо мне" },
  ];
  return (
    <>
      <nav className={`${styles.nav} `}>
        <ul className={styles.nav_list}>
          {links.map((link) => (
            <li key={link.id} className={styles.nav_item}>
              <Link
                href={link.href}
                className={`${styles.nav_item_link} ${
                  router === link.href ? styles.active : null
                }`}
                aria-label={link.aria}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
