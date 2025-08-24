"use client";
import { IButtonProps } from "@/types/types";
import React, { FC } from "react";

const Button: FC<IButtonProps> = ({
  text = "Отправить",
  onClick,
  classes,
  aria,
  isLoad,
  isLoader,
}) => {
  return (
    <button onClick={onClick} className={`${classes}`} aria-label={aria}>
      {isLoad ? <span className={isLoader}></span> : text}
    </button>
  );
};

export default Button;
