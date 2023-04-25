'use client';

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import {ContactData} from "@/entity/contact-data";
import CreateContactData from "@/components/create-contact-data";
import {Button, Grid} from "@mui/material";
import {Contact} from "@/entity/contact";
import CreateContactDataMenu from "@/components/create-contact-data-menu";
import {v4} from 'uuid';

interface CreateContactFormParams {
  onSave: (contact: Contact) => void
  contact?: Contact
}

export default function CreateContactForm({onSave, contact}: CreateContactFormParams) {
  const [name, setName] = useState<string>(contact?.name || '')
  const [avatarUrl, setAvatarUrl] = useState<string>(contact?.avatarUrl || '')
  const [data, setData] = useState<ContactData[]>(contact?.data || [])

  useEffect(() => {
    setName(contact?.name || '')
    setAvatarUrl(contact?.avatarUrl || '')
    setData(contact?.data || [])
  }, [contact])

  const handleAddDataClick = () => {
    setData(data => {
      return [...data, {uuid: v4()}]
    })
  }

  const handleChangeContactData = (changedData: ContactData, index: number) => {
    const newData = [...data]
    newData[index] = changedData
    setData(newData)
  }

  const handleOnDeleteContactData = (deleted: ContactData, index: number) => {
    const newData = data
      .filter((d, i) => i != index)
      .map(d => ({...d}))
    setData(newData)
  }

  const handleSaveClick = () => {
    let contactData = data
    if (!(contact?.uuid)) {
      contactData = data.map(d => ({...d, uuid: undefined}))
    }
    const contactToSave: Contact = { name, avatarUrl, data: contactData, uuid: contact?.uuid }
    const headers = new Headers()
    headers.set('accept', 'application/json')
    headers.set('content-type', 'application/json')
    let url = 'http://localhost:8080/contact'
    if (contact) {
      url += `/${contact.uuid}`
    }
    fetch(url, {
      method: contact ? 'PUT' : 'POST',
      cache: 'no-cache',
      mode: 'cors',
      body: JSON.stringify(contactToSave),
      headers,
    }).then(response => response.json())
      .then(jsonResponse => onSave(jsonResponse))
  }

  return (<Box component="form" autoComplete="off">
    <TextField required variant="outlined" label="Nome" value={name} onChange={e => setName(e.target.value)}></TextField>
    <TextField variant="outlined" label="Avatar" value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)}></TextField>
    {data.map((d, i) => (
      <Grid key={d.uuid} container spacing={2}>
        <Grid item xs={12} md={10}>
          <CreateContactData data={d} dataIndex={i} onChange={handleChangeContactData}></CreateContactData>
        </Grid>
        <Grid item xs={12} md={2}>
          <CreateContactDataMenu data={d} index={i} onDelete={handleOnDeleteContactData} />
        </Grid>
      </Grid>
    ))}
    <Button onClick={handleAddDataClick} variant="outlined">Adicionar Dados</Button>
    <Button onClick={handleSaveClick} variant="contained">Salvar</Button>
  </Box>)
}
