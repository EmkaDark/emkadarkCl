"use client";
import { FC, useEffect } from "react";
import styles from "./MobileMenu.module.scss";
import NavigationMob from "../NavigationMob.tsx/NavigationMob";
interface IProps {
  isActive: boolean;
  onClose: () => void;
}
const MobileMenu: FC<IProps> = ({ isActive, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <div className={`${styles.menu} ${isActive ? styles.open : ""}`}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="закрыть меню"
        >
          <span></span>
          <span></span>
        </button>
        <NavigationMob />
      </div>
    </div>
  );
};

export default MobileMenu;
