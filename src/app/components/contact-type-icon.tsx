import {Icon} from "@mui/material";
import {ContactMail, ContactPhone} from "@mui/icons-material";
import React from "react";

export default function ContactTypeIcon({type}: {type?: string}) {
  if (type === 'TELEPHONE') {
    return <Icon><ContactPhone></ContactPhone></Icon>
  }
  else if (type === 'EMAIL') {
    return <Icon><ContactMail></ContactMail></Icon>
  }
  return <></>
}