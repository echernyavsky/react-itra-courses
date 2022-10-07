import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GlobalContext from "../../shared/contexts/GlobalContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import routes from "../../shared/constants/routes";
import { Link } from "react-router-dom";

export default function Header() {
    const { showBorders, setShowBorders } = useContext(GlobalContext);

    return (
      <Box p={4}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={2}>
              <Link to={routes.HOME}>
                  <img src="/react-logo.png" style={{ maxWidth: 100 }} />
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
          <Grid item xs={12} md={6}>
            <Box textAlign="right">

            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}
