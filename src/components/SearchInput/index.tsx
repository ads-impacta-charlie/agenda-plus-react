import { ChangeEventHandler } from "react";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  onSearch: ChangeEventHandler<HTMLInputElement>;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  return (
    <input
      type="text"
      className={styles.search}
      placeholder="Buscar"
      onChange={onSearch}
    />
  );
}
