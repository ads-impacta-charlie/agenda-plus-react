import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Styles/Navbar.module.css";
import { signOutUser } from "@/services/authService";
import logo from "@/Assets/Logo2.svg";
import home from "@/Assets/home.svg";
import { SearchInput } from "../SearchInput";

interface AppHeaderProps {
  onSearch: (searchTerm: string) => void;
}

export default function AppHeader({ onSearch }: AppHeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <p className={styles.logoFont}>Agenda Plus</p>
      </div>
      <SearchInput onSearch={handleSearch} />
      <div className={styles.iconsContainer}></div>
      <div>
        <a href="#">
          <Image src={home} alt="logo" className={styles.home} />
        </a>
      </div>
      <div>
        <button className={styles.avatar} onClick={handleLogout}></button>
      </div>
    </nav>
  );
}
