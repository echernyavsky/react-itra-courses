import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";

export default function Sidebar() {
  return (
      <Box my={2} mr={4} px={2}>
        <Box>
          <Link to={routes.HOME}>Home Page</Link>
        </Box>
        <Box>
          <Link to={routes.LOGIN}>Login</Link>
        </Box>
        <Box>
          <Link to={routes.CARS.ROOT}>Cars list</Link>
        </Box>
      </Box>
  );
}
