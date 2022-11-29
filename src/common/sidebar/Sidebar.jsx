import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";

export default function Sidebar() {
  return (
    <Box my={2} mr={4} px={2}>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={routes.AIR_TRAVEL.ROOT}>Air travels</Link>
        </li>
      </ul>
    </Box>
  );
}
