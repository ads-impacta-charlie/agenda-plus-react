"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Box, Container } from "@mui/material";
import styles from "@/Styles/Login.module.css";
import logo from "@/Assets/Logo.svg";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //sign in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <Image src={logo} alt="logo" className={styles.logo} />

        <form onSubmit={handleLogin}>
          <input
            className={`${styles.input} ${styles.inputUser} `}
            type="text"
            placeholder="Usuário"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            className={`${styles.input} ${styles.inputPsw}`}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            className={`${styles.input} ${styles.btn}`}
            type="submit"
            style={{ backgroundColor: "#E2BE81", marginTop: "40px" }}
          >
            Login
          </button>

          <p style={{ color: "whitesmoke", fontSize: "12px" }}>
            Ainda não tem conta?{" "}
            <Link
              href={"./app/Register"}
              style={{ color: "#00FFFF", cursor: "pointer" }}
            >
              Registre-se{" "}
            </Link>
            aqui!
          </p>
        </form>
      </Container>
    </Box>
  );
}
