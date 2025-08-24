import Container from "@/components/Container/Container";
import React from "react";
import { myspeshl } from "./myspeshl";
import styles from "./Myinfo.module.scss";
const MyInfo = () => {
  return (
    <section className={styles.myinfo}>
      <Container className={styles.myinfo_container}>
        <div className={styles.myinfo_about}>
          <h3 className={styles.myinfo_about_header}>Привет! Я Emka 👋</h3>
          <p className={styles.myinfo_about_desc}>
            Full Stack веб-разработчик с горящими глазами и огромным желанием
            развиваться в IT. За последние годы я самостоятельно освоил
            современный стек технологий и создал множество проектов "в стол" -
            от лендингов до сложных fullstack-приложений.
          </p>
          <p className={styles.myinfo_about_desc}>
            Сейчас я нахожусь в точке, где теория встречается с практикой, и ищу
            команду, которая даст шанс проявить себя. Уверен, что моя
            усидчивость и страсть к коду помогут быстро влиться в рабочий
            процесс и приносить пользу.
          </p>
        </div>
        <ul className={styles.myinfo_list}>
          {myspeshl.map((card, index) => (
            <li key={index} className={styles.myinfo_item}>
              <card.icon className={styles.myinfo_icon} size={50} />
              <h3 className={styles.myinfo_header}>{card.title}</h3>
              <p className={styles.myinfo_desc}>{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default MyInfo;
