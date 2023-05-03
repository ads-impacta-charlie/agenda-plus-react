"use client";
import React from "react";
import Image from "next/image";
import styles from "./Styles/Navbar.module.css";

import logo from "@/Assets/Logo2.svg";
import home from "@/Assets/home.svg";

export default function AppHeader() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <p className={styles.logoFont}>Agenda Plus</p>
      </div>
      {/*<input type="text" className={styles.search} placeholder="Buscar" />*/}
      <div className={styles.iconsContainer}>
        <div>
          <a href="#">
            <Image src={home} alt="logo" className={styles.home} />
          </a>
        </div>
        <div>
          <button className={styles.avatar}></button>
        </div>
      </div>
    </nav>
  );
}
