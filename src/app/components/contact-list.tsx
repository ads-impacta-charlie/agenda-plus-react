'use client';

import useSWR from 'swr';
import {Contact} from "@/app/entity/contact";
import CreateContactForm from "@/app/components/create-contact-form";
import {Button} from "@mui/material";
import {useState} from "react";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ContactList() {
  const { data, mutate} = useSWR<Contact[]>('http://localhost:8080/contact', fetcher)
  const contacts = data || []
  const [ contactToEdit, setContactToEdit ] = useState<Contact>()

  const handleCreateContactFormSave = async (contact: Contact) => {
    setContactToEdit(undefined)
    return mutate([...contacts, contact])
  }

  return (<>
    {contacts.map(contact => (
      <div key={contact.uuid}>
        <p><b>{contact.name}</b></p>
        <ul>
          {contact.data.map(data => (
            <li key={contact.uuid}><em>{data.value} ({data.type}, {data.category})</em></li>
          ))}
        </ul>
        <Button variant="outlined" onClick={() => setContactToEdit(contact)}>Editar</Button>
      </div>
    ))}
    <CreateContactForm onSave={handleCreateContactFormSave} contact={contactToEdit}></CreateContactForm>
  </>)
}
