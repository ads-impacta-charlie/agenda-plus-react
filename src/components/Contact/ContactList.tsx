/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import React, { useState } from "react";
import Image from "next/image";

import sideBarItens from "@/entity/side-bar-itens";
import { Contact } from "@/entity/contact";
import { fetcher } from "@/services/fetcher";

import SideForm from "./SideForm/SideForm";
import PlusBtn from "./PlusBtn/PlusBtn";
import ContactCategoryIcon from "./ContactData/contact-category-icon";
import ContactTypeIcon from "./ContactData/contact-type-icon";

import styles from "./Styles/Contact.module.css";
import edit from "@/Assets/editar.svg";
import del from "@/Assets/lixeira.svg";
import userIcon from "@/Assets/userIcon2.svg";

export default function ContactList() {
  //states
  const { data, mutate } = useSWR<Contact[]>(
    "http://localhost:8080/contact",
    fetcher
  );
  const [contactToEdit, setContactToEdit] = useState<Contact>();
  const [contactMenu, setContactMenu] = useState<Contact>();
  const [sideBar, setSideBar] = useState(false);

  const contacts = data || [];

  const handleEventHover = (event: any, contact: Contact) => {
    console.log(contact);
    setContactMenu(contact);
  };

  const handleEditContact = (contact: Contact) => {
    setSideBar(true);
    console.log(contact);
    setContactToEdit(contact);
  };

  const handleDeleteContact = async (contact: Contact) => {
    if (!contact || !contact.uuid) {
      return console.log("não acho");
    }

    const headers = new Headers();
    headers.set("content-type", "application/json");

    let url = `http://localhost:8080/contact/${contact.uuid}`;
    await fetcher(url, {
      method: "DELETE",
      cache: "no-cache",
      mode: "cors",
    });

    return mutate(contacts.filter((c) => c.uuid !== contact.uuid));
  };

  //joga pro banco
  const handleSaveBtn = async (contact: Contact) => {
    setContactToEdit(undefined);
    return mutate([...contacts, contact]);
  };

  return (
    <div
      className={
        !sideBar ? styles.containerWithoutForm : styles.containerWithForm
      }
    >
      {/*Sidebar */}
      <div className={!sideBar ? styles.sideBar : styles.noSideBar}>
        <ul>
          {Object.keys(sideBarItens.menu1).map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      {/*Listagem */}
      <div>
        <ul className={styles.wrapper}>
          <li className={styles.headerLi}>
            <div></div>
            <div>Nome</div>
            <div>Email | Número</div>
            <div>Tipo</div>
          </li>
          {contacts.map((contact) => {
            return (
              <div key={contact.uuid}>
                <li
                  onMouseEnter={(e) => handleEventHover(e, contact)}
                  className={styles.listAllContacts}
                >
                  {/*1 */}
                  <div className={styles.avatarContainer}>
                    <div>
                      {contact.avatarUrl ? (
                        <img
                          src={contact.avatarUrl}
                          alt="avatar icon"
                          className={styles.imageIcon}
                        />
                      ) : (
                        <Image
                          src={userIcon}
                          alt="avatar icon"
                          className={styles.imageIcon}
                        />
                      )}
                    </div>
                  </div>

                  {/*2*/}
                  <div className={styles.contactName}>{contact.name}</div>

                  {/*3*/}
                  <div className={styles.containerValues}>
                    {contact.data.map((contactData) => {
                      return (
                        <>
                          <div>
                            <ContactTypeIcon type={contactData.type} />
                            <p>{contactData.value}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className={styles.containerValues}>
                    {contact.data.map((contactData) => {
                      return (
                        <>
                          <div>
                            <ContactCategoryIcon
                              category={contactData.category}
                            />
                            <p>{contactData.category}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      gridArea: "icon",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={edit}
                      alt="edit icon"
                      onClick={() => handleEditContact(contactMenu!)}
                    />
                    <Image
                      src={del}
                      alt="edit icon"
                      onClick={() => handleDeleteContact(contactMenu!)}
                    />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>

      {
        /*SideForm */
        sideBar ? (
          <SideForm
            onClick={handleSaveBtn}
            backClick={() => setSideBar(false)}
            contact={contactToEdit}
          />
        ) : (
          <PlusBtn onClick={() => setSideBar(true)} />
        )
      }
    </div>
  );
}
