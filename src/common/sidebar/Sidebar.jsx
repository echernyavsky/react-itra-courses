import React from "react";
import { Link } from "react-router-dom";
import {Box} from "@mui/material";
import routes from "../../shared/constants/routes";

export default function Sidebar() {
  return (
      <Box>
        <ul>
            <li>
              <Link to={routes.HOME}>Home</Link>
            </li>
            <li>
                <Link to={routes.LOGIN}>Login</Link>
            </li>
            <li>
                <Link to={routes.TRAVEL_POINTS}>Travel points</Link>
            </li>
        </ul>
      </Box>
  );
}
