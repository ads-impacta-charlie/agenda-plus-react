/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import logo from "@/Assets/Logo.png";

import { SearchInput } from "../SearchInput";
import Switch from "react-switch";

import styles from "./Styles/Navbar.module.css";

interface AppHeaderProps {
  onSearch: (searchTerm: string) => void;
  handleSwitch(): void;
  theme?: any;
}

export default function AppHeader({
  onSearch,
  handleSwitch,
  theme,
}: AppHeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <p className={styles.logoFont}>Agenda Plus</p>
      </div>
      <SearchInput onSearch={handleSearch} />
      <Switch
        onChange={handleSwitch}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        className={styles.switch}
      />
    </div>
  );
}
