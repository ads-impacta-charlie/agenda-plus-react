"use client";
import { AuthContextProvider } from "@/context/AuthContext";
import Document, { Html, Head, Main, NextScript } from "next/document";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <Html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
