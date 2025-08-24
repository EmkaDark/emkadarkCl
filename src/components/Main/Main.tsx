import React, { FC } from "react";
import { IChild } from "@/types/types";
import styles from "./Main.module.scss";
const Main: FC<IChild> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
