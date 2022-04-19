import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Content from "./common/content/Content";
import Sidebar from "./common/sidebar/Sidebar";
import Header from "./common/header/Header";
import AppRoutes from "./common/routes/AppRoutes";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Content>
              <AppRoutes />
            </Content>
          </Grid>
        </Grid>
      </Container>
    </BrowserRouter>
  );
}
