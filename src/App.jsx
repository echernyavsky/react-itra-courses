import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Header from "./common/header/Header.jsx";
import Sidebar from "./common/sidebar/Sidebar.jsx";
import Content from "./common/content/Content.jsx";
import AppRoutes from "./common/routes/AppRoutes.jsx";
import GlobalContext from "./shared/contexts/GlobalContext.js";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IntlProvider } from "react-intl";
import locales from "./shared/constants/locales.js";

import enMessages from "./shared/localizations/en.json";
import ruMessages from "./shared/localizations/ru.json";
import plMessages from "./shared/localizations/pl.json";
import esMessages from "./shared/localizations/es.json";
import localStorageKeys from "./shared/constants/localStorageKeys.js";

const messages = {
    [locales.EN]: enMessages,
    [locales.RU]: ruMessages,
    [locales.PL]: plMessages,
    [locales.ES]: esMessages,
};

function App() {
    const [showBorders, setShowBorders] = useState(false);
    const [locale, setLocale] = useState(localStorage.getItem(localStorageKeys.LOCALE) || locales.EN);

    const setCurrentLocale = (value) => {
        setLocale(value);
        localStorage.setItem(localStorageKeys.LOCALE, value);
    }

    return (
        <GlobalContext.Provider value={{
            showBorders,
            setShowBorders,
            currentLocale: locale,
            setCurrentLocale: setCurrentLocale,
        }}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                </LocalizationProvider>
            </IntlProvider>
        </GlobalContext.Provider>
    );
}

export default App
