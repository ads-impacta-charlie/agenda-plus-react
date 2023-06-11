import ContactDataCategory from "@/entity/contact-data-category";
import { ContactData } from "@/entity/contact-data";
import { useEffect, useState } from "react";
import styles from "./Styles/DataForm.module.css";

import Image from "next/image";
import del from "@/Assets/lixeira.svg";

interface props {
  data: ContactData;
  dataIndex: number;
  onChange: (data: ContactData, dataIndex: number) => void;
  onDelete?: (data: ContactData, dataIndex: number) => void;
  isValid?: boolean;
}

export default function DataForm({
  data,
  onChange,
  dataIndex,
  onDelete,
}: props) {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChangeCategory = (category: string) => {
    onChange({ ...data, category }, dataIndex);
  };

  const handleChangeValue = (value: string) => {
    onChange({ ...data, value }, dataIndex);
  };

  const handleDeleteContactData = () => {
    if (onDelete) {
      onDelete(data, dataIndex);
    }
  };

  return (
    <div className={styles.container}>
      <select
        name="categories"
        onChange={(e) => handleChangeCategory(e.target.value)}
        required
      >
        <option selected={true} disabled={true} hidden></option>
        {Object.keys(ContactDataCategory).map((category) => {
          return (
            <option key={category} value={category}>
              {ContactDataCategory[category]}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        placeholder="Valor"
        value={data?.value}
        onChange={(e) => handleChangeValue(e.target.value)}
        required
      ></input>
      <Image
        src={del}
        alt="Delete icon"
        onClick={() => handleDeleteContactData()}
      />
    </div>
  );
}
