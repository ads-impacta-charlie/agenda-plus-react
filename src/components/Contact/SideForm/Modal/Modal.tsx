/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";

import styles from "./Styles/Modal.module.css";
import userIcon from "@/Assets/userIcon2.svg";

interface props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  src?: string;
}

export default function Modal({ onChange, src }: props) {
  const [visible, setVisible] = useState(false);

  const handleChangeAvatar = (e: any) => {
    onChange(e);
  };
  return (
    <>
      {src ? (
        <img
          src={src || ""}
          alt="Avatar"
          width={200}
          height={200}
          className={styles.img}
          onClick={() => {
            setVisible(true);
            console.log(visible);
          }}
        />
      ) : (
        <Image
          src={userIcon || ""}
          alt="Avatar"
          width={100}
          height={100}
          className={styles.img}
          onClick={() => {
            setVisible(true);
            console.log(visible);
          }}
        />
      )}

      {visible ? (
        <>
          <div className={styles.container} onClick={() => setVisible(false)} />
          <div className={styles.modal} style={{ opacity: "none" }}>
            <p>Insira a Url da imagem!</p>
            <input
              type="text"
              onChange={(e) => handleChangeAvatar(e.target.value)}
            />
            <input
              type="button"
              onClick={() => setVisible(false)}
              value="Adicionar"
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
