import {Icon} from "@mui/material";
import {Business, Person} from "@mui/icons-material";
import React from "react";

export default function ContactCategoryIcon({category}: {category?: string}) {
  if (category === 'PERSONAL') {
    return <Icon><Person></Person></Icon>
  }
  else if (category === 'BUSINESS') {
    return <Icon><Business></Business></Icon>
  }
  return <></>
}