"use client";
import Button from "@/components/Button/Button";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import styles from "./Form.module.scss";
import { useMask } from "@react-input/mask";
import { instance } from "@/axios/instance";

const Form = ({ open }: { open: () => void }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const inpuerRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const changePhone = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoad(true);
    const { data } = await instance.post("/api/email", {
      name,
      phone,
    });
    if (data.success) {
      open();
      setIsLoad(false);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.form_inputs}>
        <label htmlFor="name" className={styles.form_label}>
          <span>Имя</span>
          <input
            type="text"
            id="name"
            aria-label="Введите ваше имя"
            placeholder="Emka"
            required
            onChange={(e) => changeName(e)}
            value={name}
          />
        </label>

        <label htmlFor="phone" className={styles.form_label}>
          <span>Телефон</span>
          <input
            type="text"
            id="phone"
            aria-label="Введите телефона"
            ref={inpuerRef}
            onChange={(e) => changePhone(e)}
            placeholder="+7 (___) ___-__-__"
            value={phone}
          />
        </label>
      </div>

      <Button
        classes={styles.form_button}
        text="Отправить"
        aria="Отправить данные"
        isLoad={isLoad}
        isLoader={styles.form_loader}
      ></Button>
    </form>
  );
};

export default Form;
