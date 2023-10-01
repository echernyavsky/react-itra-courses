import React from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

export default function Content({ children }) {
  return <Paper><Box m={2} p={2}>{children}</Box></Paper>;
}
