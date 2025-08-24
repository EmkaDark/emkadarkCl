import React from "react";
import Image from "next/image";
import styles from "./MyCard.module.scss";
import { myInfo } from "./myinfo";
const MyCard = () => {
  return (
    <div className={styles.mycard}>
      <Image
        src={"/me.jpg"}
        width={400}
        height={600}
        alt="It's me)"
        className={styles.mycard_img}
      ></Image>
      <div className={styles.mycard_info}>
        {Object.entries(myInfo).map((entry) => (
          <span className={styles.mycard_entry}>
            <b>{entry[0]}:</b>
            <p>{entry[1]}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
