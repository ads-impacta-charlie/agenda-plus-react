"use client";

import { useState, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import Form from "@/components/Form/Form";
import signIn from "@/services/auth/signIn";
import { useRouter } from "next/navigation";
import {
  browserSessionPersistence,
  setPersistence,
  getAuth,
} from "firebase/auth";
import firebase_app from "firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuthContext();
  const router = useRouter();

  const auth = getAuth(firebase_app);
  //@ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();
    await setPersistence(auth, browserSessionPersistence);
    const { result, error } = await signIn(email, password);

    if (error) {
      return alert("Email ou Senha incorretos");
    }
    // else successful
    console.log("SignIn");
    // console.log(result);
    return router.push("/Home");
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
