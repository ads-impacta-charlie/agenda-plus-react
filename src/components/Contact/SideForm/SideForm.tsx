import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal/Modal";
import DataForm from "./DataForm/DataForm";

//Entities
import { Contact } from "@/entity/contact";
import { ContactData } from "@/entity/contact-data";
import ContactDataType from "@/entity/contact-data-type";

import { fetcher } from "@/services/fetcher";
import { v4 } from "uuid";

//Assets
import styles from "./Styles/SideForm.module.css";
import back from "@/Assets/backspace.svg";

interface formProps {
  onClick: (contact: Contact) => void;
  backClick: (event: React.MouseEvent) => void;
  contact?: Contact;
}

export default function SideForm({ backClick, onClick, contact }: formProps) {
  const [name, setName] = useState<string>(contact?.name || "");
  const [avatarUrl, setAvatarUrl] = useState<string>(contact?.avatarUrl || "");
  const [type, setType] = useState("TELEPHONE");
  const [data, setData] = useState<ContactData[]>(contact?.data || []);

  useEffect(() => {
    setName(contact?.name || "");
    setAvatarUrl(contact?.avatarUrl || "");
    setData(contact?.data || []);
  }, [contact]);

  const handleAddDataBtn = () => {
    setData((data) => {
      return [...data, { uuid: v4(), type: type }];
    });
  };

  const handleChangeContactData = (changedData: ContactData, index: number) => {
    const newData = [...data];
    newData[index] = changedData;
    setData(newData);
  };
  const handleAvatarChange = (e: any) => {
    setAvatarUrl(e);
  };

  const handleDeleteContactData = (deleted: ContactData, index: number) => {
    const newData = data.filter((d, i) => i != index).map((d) => ({ ...d }));
    setData(newData);
  };

  const handleSaveClick = () => {
    let contactData = data;

    if (!contact?.uuid) {
      contactData = data.map((d) => ({ ...d, uuid: undefined }));
    }

    const contactToSave: Contact = {
      name,
      avatarUrl,
      data: contactData,
      uuid: contact?.uuid,
    };

    let url = "http://localhost:8080/contact";

    if (contact) {
      url += `/${contact.uuid}`;
    }

    fetcher(url, {
      method: contact ? "PUT" : "POST",
      cache: "no-cache",
      mode: "cors",
      body: JSON.stringify(contactToSave),
    }).then((jsonResponse: any) => onClick(jsonResponse as Contact));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backContainer}>
          <Image
            src={back}
            alt="back"
            className={styles.backspace}
            onClick={backClick}
          />
        </div>

        <Modal onChange={handleAvatarChange} src={avatarUrl} />

        <input
          type="text"
          placeholder="Nome"
          value={contact?.name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <div className={styles.containerAdd}>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            required
            className={styles.typeDropDown}
          >
            {Object.keys(ContactDataType).map((type) => {
              return (
                <option key={type} value={type}>
                  {ContactDataType[type]}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleAddDataBtn}
            style={{
              height: "30px",
              borderRadius: "0",
              border: "0.5px solid",
              marginLeft: "5px",
            }}
          >
            Adicionar
          </button>
        </div>

        <div className={styles.dataForm}>
          {data.map((d, i) => {
            return (
              <div key={i}>
                <DataForm
                  data={d}
                  dataIndex={i}
                  onChange={handleChangeContactData}
                  onDelete={handleDeleteContactData}
                />
              </div>
            );
          })}
        </div>

        {/*button*/}

        <button type="submit" onClick={handleSaveClick}>
          {" "}
          Registrar{" "}
        </button>
      </div>
    </>
  );
}
