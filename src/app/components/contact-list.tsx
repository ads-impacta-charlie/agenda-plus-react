'use client';

import useSWR from 'swr';
import {Contact} from "@/app/entity/contact";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ContactList() {
  const { data} = useSWR<Contact[]>('http://localhost:8080/contact', fetcher)
  const contacts = data || []

  return (<>
    {contacts.map(contact => (
      <div key={contact.uuid}>
        <p><b>{contact.name}</b></p>
        <ul>
          {contact.data.map(data => (
            <li key={contact.uuid}><em>{data.value} ({data.type}, {data.category})</em></li>
          ))}
        </ul>
      </div>
    ))}
  </>)
}
