import styles from "./Styles/Form.module.css";
import logo from "@/Assets/Logo.svg";
import back from "@/Assets/backspace.svg";

import Image from "next/image";
import Link from "next/link";

interface props {
  handleSubmitProp: (evento: React.FormEvent<HTMLFormElement>) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  btn: string;
  register: boolean;
  onFail?: boolean;
  errorMessage?: string;
}

const Form: React.FC<props> = ({
  handleSubmitProp,
  setEmail,
  setPassword,
  btn,
  register,
  onFail,
  errorMessage
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        {register ? (
          <Link href={"./"}>
            <Image
              src={back}
              alt="back"
              className={styles.backspace}
              priority={false}
            />
          </Link>
        ) : (
          <></>
        )}
        <Image src={logo} alt="logo" className={styles.logo} priority={false} />
        <form onSubmit={handleSubmitProp}>
          <input
            className={`${styles.input} ${styles.inputUser} `}
            type="email"
            placeholder="Usuário"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            className={`${styles.input} ${styles.inputPsw}`}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {
            onFail ? (
              <p style={{ color: "#990000", WebkitTextStrokeColor: "white" }}>{errorMessage}</p>
            ) : (
              <></>
            )
          }
          <button
            className={`${styles.input} ${styles.btn}`}
            type="submit"
            style={{ backgroundColor: "#E2BE81", marginTop: "40px" }}
          >
            {btn}
          </button>
          {!register ? (
            <div style={{ color: "whitesmoke", fontSize: "12px" }}>
              Ainda não tem conta?{" "}
              <Link
                href={"./Register"}
                style={{ color: "#00FFFF", cursor: "pointer" }}
              >
                Registre-se{" "}
              </Link>
              aqui!
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};
export default Form;
