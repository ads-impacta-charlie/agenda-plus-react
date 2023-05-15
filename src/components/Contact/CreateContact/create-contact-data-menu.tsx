import { ContactData } from "@/entity/contact-data";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreHorizRounded } from "@mui/icons-material";
import React, { useState } from "react";

interface CreateContactDataMenuParams {
  data: ContactData;
  index: number;
  onDelete?: (data: ContactData, index: number) => void;
}

export default function CreateContactDataMenu({
  data,
  index,
  onDelete,
}: CreateContactDataMenuParams) {
  const [dataMenuAnchorEl, setDataMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const open = Boolean(dataMenuAnchorEl);

  const handleDeleteContactData = () => {
    if (onDelete) {
      onDelete(data, index);
    }
  };

  const handleDataMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDataMenuAnchorEl(event.currentTarget);
  };
  const handleDataMenuClose = () => {
    setDataMenuAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleDataMenuClick}>
        <MoreHorizRounded />
      </IconButton>
      <Menu
        anchorEl={dataMenuAnchorEl}
        open={open}
        onClose={handleDataMenuClose}
      >
        <MenuItem onClick={handleDeleteContactData}>Deletar</MenuItem>
      </Menu>
    </>
  );
}
