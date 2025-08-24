"use client";
import React, { FC, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Alert.module.scss";
interface Iprops {
  isActive: boolean;
  close: () => void;
}
const Alert: FC<Iprops> = ({ isActive, close }) => {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  return (
    <div className={`${styles.submit} ${isActive ? styles.open : ""}`}>
      <div className={styles.overlay} onClick={close}></div>
      <div className={styles.content}>
        <p className={styles.text}>Ваша заявка успешно отправлена</p>
        <FaCheck size={100} className={styles.icon} />
      </div>
    </div>
  );
};

export default Alert;
