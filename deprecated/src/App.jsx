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

function App() {
    const [showBorders, setShowBorders] = useState(false);

    return (
        <GlobalContext.Provider value={{
            showBorders,
            setShowBorders,
        }}>
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
        </GlobalContext.Provider>
    );
}

export default App
