import React, { FC, useState } from "react";
import styles from "./Burger.module.scss";
interface IProps {
  isActive: boolean;
  clickHandler: () => void;
}
const Burger: FC<IProps> = ({ isActive, clickHandler }) => {
  return (
    <div className={styles.burger_par}>
      <button
        className={`${styles.burger} ${isActive ? styles.active : ""}`}
        onClick={clickHandler}
        aria-label="Меню"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
    </div>
  );
};

export default Burger;
