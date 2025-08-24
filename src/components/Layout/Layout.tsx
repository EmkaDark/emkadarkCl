import { IChild } from "@/types/types";
import React, { FC } from "react";
import styles from "./Layout.module.scss";
const Layout: FC<IChild> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
