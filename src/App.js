import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Content from "./common/content/Content";
import Sidebar from "./common/sidebar/Sidebar";
import Header from "./common/header/Header";
import AppRoutes from "./common/routes/AppRoutes";

import "./styles.css";
import { Container, Grid } from "@mui/material";
import {IntlProvider} from "react-intl";
import locales from "./shared/constants/locales";
import localStorageKeys from "./shared/constants/localStorageKeys";
import enMessages from "./shared/localizations/en.json";
import ruMessages from "./shared/localizations/ru.json";
import plMessages from "./shared/localizations/pl.json";

const messages = {
  [locales.EN]: enMessages,
  [locales.RU]: ruMessages,
  [locales.PL]: plMessages
};

export default function App() {
  const [currentLocale, setCurrentLocale] = useState(localStorage.getItem(localStorageKeys.LOCALE) || locales.EN);

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      <BrowserRouter>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Header
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Content>
                <AppRoutes />
              </Content>
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    </IntlProvider>
  );
}
