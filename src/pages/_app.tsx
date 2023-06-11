import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { User } from "firebase/auth";
import { checkUserLoggedIn } from "@/services/authService";

import "./index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, [checkUserLoggedIn()]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Component {...pageProps} user={user} />
    </>
  );
}
