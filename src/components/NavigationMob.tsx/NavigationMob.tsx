import Link from "next/link";
import React from "react";
import styles from "./NavigationMob.module.scss";
import { usePathname } from "next/navigation";
const NavigationMob = () => {
  const router = usePathname();

  const links = [
    { href: "/", label: "Главная", id: 1, aria: "Главная страница" },
    { href: "/services", label: "Услуги", id: 2, aria: "Страница услуг" },
    { href: "/about", label: "Обо мне", id: 3, aria: "Страница обо мне" },
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

export default NavigationMob;
