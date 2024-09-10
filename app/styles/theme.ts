"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: { fontSize: 18 },
});

export default theme;
