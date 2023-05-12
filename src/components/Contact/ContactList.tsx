import useSWR from "swr";
import { Contact } from "@/entity/contact";
import CreateContactForm from "@/components/Contact/CreateContact/create-contact-form";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { MoreHorizRounded } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContactTypeIcon from "@/components/Contact/ContactData/contact-type-icon";
import ContactCategoryIcon from "@/components/Contact/ContactData/contact-category-icon";
import ContactDataValue from "@/components/Contact/ContactData/contact-data-value";
import { fetcher } from "@/services/fetcher";

// @ts-ignore
export default function ContactList() {
  const { data, mutate } = useSWR<Contact[]>(
    "http://localhost:8080/contact",
    fetcher
  );
  const contacts = data || [];
  const [contactToEdit, setContactToEdit] = useState<Contact>();
  const [contactMenu, setContactMenu] = useState<Contact>();
  const [actionMenuAnchorEl, setActionMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const open = Boolean(contactMenu);

  const handleCreateContactFormSave = async (contact: Contact) => {
    setContactToEdit(undefined);
    return mutate([...contacts, contact]);
  };

  const handleEditContact = (contact: Contact) => {
    handleDataMenuClose();
    setContactToEdit(contact);
  };

  const handleDataMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    contact: Contact
  ) => {
    setContactMenu(contact);
    setActionMenuAnchorEl(event.currentTarget);
  };

  const handleDataMenuClose = () => {
    setContactMenu(undefined);
    setActionMenuAnchorEl(null);
  };

  const handleDeleteContact = async (contact: Contact) => {
    handleDataMenuClose();

    if (!contact || !contact.uuid) {
      return;
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

  return (
    <>
      <List>
        {contacts.map((contact) => (
          <ListItem
            key={contact.uuid}
            alignItems="flex-start"
            secondaryAction={
              <IconButton onClick={(e) => handleDataMenuClick(e, contact)}>
                <MoreHorizRounded />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt={contact.name} src={contact.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              primaryTypographyProps={{ fontWeight: "bold" }}
              secondary={
                <>
                  {contact.data.map((data) => (
                    <Grid
                      container
                      key={data.uuid}
                      spacing={0.5}
                      alignItems="center"
                    >
                      <Grid item xs="auto">
                        <ContactTypeIcon type={data.type} />
                      </Grid>
                      <Grid item xs="auto">
                        <ContactCategoryIcon category={data.category} />
                      </Grid>
                      <Grid item xs>
                        <ContactDataValue data={data} />
                      </Grid>
                    </Grid>
                  ))}
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      <CreateContactForm
        onSave={handleCreateContactFormSave}
        contact={contactToEdit}
      ></CreateContactForm>
      <Menu
        open={open}
        anchorEl={actionMenuAnchorEl}
        onClose={handleDataMenuClose}
      >
        <MenuItem onClick={() => handleEditContact(contactMenu!)}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Editar</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDeleteContact(contactMenu!)}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Excluir</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
