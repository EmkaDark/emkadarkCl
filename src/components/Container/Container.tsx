import { IChild } from "@/types/types";
import React, { FC } from "react";
import styles from "./Container.module.scss";
interface IProp extends IChild {
  className?: string;
}
const Container: FC<IProp> = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
