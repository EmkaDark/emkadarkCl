import React from "react";
import { servicesData } from "../Hero/servicesData";
import styles from "./Serv.module.scss";
const Serv = () => {
  return (
    <ul className={styles.serv}>
      {servicesData.map((service, index) => {
        const IconComponent = service.icon;

        return (
          <li key={index} className={styles.serv_item}>
            <div className={styles.serv_icon}>
              <IconComponent size={75} />
            </div>
            <h3 className={styles.serv_name}>{service.name}</h3>
            <p className={styles.serv_desk}>{service.desk}</p>
            <span className={styles.serv_tech}>технология:</span>
            <div className={styles.serv_technlogies}>
              [
              {service.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.serv_task}>
                  {tech},
                </span>
              ))}
              ]
            </div>
            <p className={styles.serv_price}>{service.price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Serv;
