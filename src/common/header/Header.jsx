import React from "react";
import {Box} from "@mui/material";
import LocalePicker from "../localePicker/LocalePicker";

export default function Header({ currentLocale, setCurrentLocale }) {
  return (
      <Box m={1}>
        <LocalePicker currentLocale={currentLocale} onLocaleChanged={setCurrentLocale} />
      </Box>
  )
}
