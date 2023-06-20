import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import locales from "../../shared/constants/locales";
import GlobalContext from "../../shared/contexts/GlobalContext";

export default function LocalePicker() {
    const {
        currentLocale,
        setCurrentLocale
    } = useContext(GlobalContext);

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Locale</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currentLocale}
                onChange={(e) => setCurrentLocale(e.target.value)}
                label="Locale"
            >
                <MenuItem value={locales.EN}>English</MenuItem>
                <MenuItem value={locales.ES}>Español</MenuItem>
                <MenuItem value={locales.PL}>Polska</MenuItem>
                <MenuItem value={locales.RU}>Русский</MenuItem>
            </Select>
        </FormControl>
    );
}