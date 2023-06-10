"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/NavBar/Navbar";
import ContactList from "@/components/Contact/ContactList";

import useLocalStorage from "use-local-storage";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const defaultDark = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    setTheme(defaultDark ? "dark" : "light");
  }, []);

  const handleSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div data-theme={theme}>
        <Navbar
          onSearch={handleSearch}
          handleSwitch={handleSwitch}
          theme={theme}
        />
        <ContactList searchTerm={searchTerm} />
      </div>
    </>
  );
}
