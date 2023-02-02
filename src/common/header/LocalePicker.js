import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import GlobalContext from "../../shared/contexts/GlobalContext";
import locales from "../../shared/constants/locales";

export default function LocalePicker() {
    const { currentLocale, setCurrentLocale } = useContext(GlobalContext);

    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Locale</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentLocale}
                label="Locale"
                onChange={(e) => setCurrentLocale(e.target.value)}
            >
                <MenuItem value={locales.EN}>English</MenuItem>
                <MenuItem value={locales.ES}>Espagnol</MenuItem>
                <MenuItem value={locales.PL}>Polska</MenuItem>
                <MenuItem value={locales.RU}>Русский</MenuItem>
            </Select>
        </FormControl>
    );
}