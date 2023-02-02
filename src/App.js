import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Content from "./common/content/Content";
import Sidebar from "./common/sidebar/Sidebar";
import Header from "./common/header/Header";
import AppRoutes from "./common/routes/AppRoutes";

import "./styles.css";
import GlobalContext from "./shared/contexts/GlobalContext";
import { IntlProvider } from "react-intl";
import locales from "./shared/constants/locales";

import ruMessages from "./shared/localizations/ru.json";
import enMessages from "./shared/localizations/en.json";
import esMessages from "./shared/localizations/es.json";
import plMessages from "./shared/localizations/pl.json";
import localStorageKeys from "./shared/constants/localStorageKeys";

const messages = {
  [locales.EN]: enMessages,
  [locales.RU]: ruMessages,
  [locales.ES]: esMessages,
  [locales.PL]: plMessages,
};

export default function App() {
  const [showBorders, setShowBorders] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(
      localStorage.getItem(localStorageKeys.LOCALE) || locales.EN);

  const setLocale = (value) => {
    setCurrentLocale(value);
    localStorage.setItem(localStorageKeys.LOCALE, value);
  };

  return (
    <GlobalContext.Provider value={{
      showBorders,
      setShowBorders,
      currentLocale,
      setCurrentLocale: setLocale,
    }}>
      <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
        <BrowserRouter>
          <Container maxWidth="xl" className="container">
            <Grid container>
              <Grid
                  item
                  xs={12}
                  style={showBorders ? { border: 2, borderColor: "red", borderStyle: "solid"} : {}}
              >
                <Header />
              </Grid>
              <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  style={showBorders ? { border: 2, borderColor: "green", borderStyle: "solid"} : {}}
              >
                <Sidebar />
              </Grid>
              <Grid
                  item
                  xs={12}
                  sm={8}
                  md={9}
                  lg={10}
                  style={showBorders ? { border: 2, borderColor: "yellow", borderStyle: "solid"} : {}}
              >
                <Content>
                  <AppRoutes />
                </Content>
              </Grid>
            </Grid>
          </Container>
        </BrowserRouter>
      </IntlProvider>
    </GlobalContext.Provider>
  );
}
