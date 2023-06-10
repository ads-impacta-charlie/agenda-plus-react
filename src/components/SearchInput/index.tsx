import { ChangeEventHandler } from "react";
import styles from "./style.module.css";

interface SearchInputProps {
  onSearch: ChangeEventHandler<HTMLInputElement>;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Buscar"
      onChange={onSearch}
      className={styles.input}
    />
  );
}
