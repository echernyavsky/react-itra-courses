import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
      <>
        <Box my={2}>
          <Typography variant="h2">
            <FormattedMessage id="app.home-page.header" />
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4">
                <FormattedMessage id="app.home-page.body.header1" />
              </Typography>
            </Box>
            <Box mt={2} textAlign="justify">
              <Typography variant="body1">
                <FormattedMessage id="app.home-page.body.body1" />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4">
                <FormattedMessage id="app.home-page.body.header2" />
              </Typography>
            </Box>
            <Box mt={2} textAlign="justify">
              <Typography variant="body1">
                <FormattedMessage id="app.home-page.body.body2" />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4">
                <FormattedMessage id="app.home-page.body.header3" />
              </Typography>
            </Box>
            <Box mt={2} textAlign="justify">
              <Typography variant="body1">
                <FormattedMessage id="app.home-page.body.body3" />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4">
                <FormattedMessage id="app.home-page.body.header4" />
              </Typography>
            </Box>
            <Box mt={2} textAlign="justify">
              <Typography variant="body1">
                <FormattedMessage id="app.home-page.body.body4" />
              </Typography>
            </Box>
          </Grid>
        </Grid>



      </>
  );
}
