import React from "react";
import { stacker } from "./data";
import styles from "./Technology.module.scss";
import Image from "next/image";
const Technology = () => {
  return (
    <ul className={styles.technology_list}>
      {stacker.map((stack) => (
        <li key={stack.id} className={styles.technology_list_item}>
          <Image
            src={stack.img}
            alt={stack.name}
            className={styles.img}
            width={100}
            height={100}
          />
          <div className={styles.data}>
            <strong className={styles.header}>{stack.name}</strong>
            <p className={styles.desc}>{stack.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Technology;
