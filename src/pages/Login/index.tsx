"use client";

import { useState, useEffect } from "react";
import Form from "@/components/Form/Form";
import { signIn } from "@/services/authService";
import router from "next/router";
import { checkUserLoggedIn } from "@/services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  //@ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signIn(email, password);
      router.push("/Home");
    } catch (error) {
      alert("Email ou Senha incorretos");
    }
  };

  return (
    <Form
      handleSubmitProp={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
      btn={"Login"}
      register={false}
    />
  );
}
