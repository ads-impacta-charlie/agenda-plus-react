import { AppProps } from "next/app";

import { getAuth } from "firebase/auth";

import { FirebaseAppProvider, AuthProvider } from "reactfire";

import firebase_app from "firebaseConfig";

import "./index.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const auth = getAuth(firebase_app);

  return (
    <FirebaseAppProvider firebaseApp={firebase_app}>
      <AuthProvider sdk={auth}>
        <Component {...pageProps} />
      </AuthProvider>
    </FirebaseAppProvider>
  );
}
