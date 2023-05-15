"use client";

import ContactList from "@/components/Contact/ContactList";
import Navbar from "@/components/NavBar/Navbar";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <ContactList searchTerm={searchTerm} />
    </>
  );
}
