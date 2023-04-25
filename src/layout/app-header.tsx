'use client';

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from "react";

export default function AppHeader({children}: {children: React.ReactNode}) {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Agenda+
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </Box>
    </>);
}