import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes.js";

export default function Sidebar() {
  return (
      <Box my={2} mr={4} px={2}>
        <Box my={2}>
          <Link to={routes.HOME}>Home page</Link>
        </Box>
        <Box my={2}>
          <Link to={routes.LOGIN}>Login</Link>
        </Box>
        <Box my={2}>
          <Link to={routes.EMAIL_TEMPLATES.ROOT}>Email Templates</Link>
        </Box>
        <Box my={2}>
          <a href={routes.EMAIL_TEMPLATES.ROOT}>Email Templates (a href)</a>
        </Box>
      </Box>
  );
}
