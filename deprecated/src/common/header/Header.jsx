import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GlobalContext from "../../shared/contexts/GlobalContext.js";
import { Checkbox, FormControlLabel } from "@mui/material";
import routes from "../../shared/constants/routes.js";
import { Link } from "react-router-dom";

export default function Header() {
    const { showBorders, setShowBorders } = useContext(GlobalContext);

    return (
      <Box p={4}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={1}>
              <Link to={routes.HOME}>
                  <img src="/vite.svg" style={{ maxWidth: 100 }} />
              </Link>
          </Grid>
          <Grid item xs={12} md={4}>
              <FormControlLabel
                    label="Show borders"
                    control={
                        <Checkbox
                            checked={showBorders}
                            onChange={(e) => setShowBorders(e.target.checked)}
                        />
                    }
                />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box textAlign="right">

            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}
