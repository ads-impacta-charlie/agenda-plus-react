'use client';

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

export default function AppHeader() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <p>Agenda+</p>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}