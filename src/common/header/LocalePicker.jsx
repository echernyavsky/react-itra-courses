import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import locales from "../../shared/constants/locales";
import GlobalContext from "../../shared/contexts/GlobalContext";
import localStorageKeys from "../../shared/constants/localStorageKeys";

function LocalePicker() {
    const { locale, setLocale } = useContext(GlobalContext);

    const setCurrentLocale = (e) => {
        const value = e.target.value;
        setLocale(value);
        localStorage.setItem(localStorageKeys.LOCALE, value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Locale</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locale}
                    label="Locale"
                    onChange={setCurrentLocale}
                >
                    <MenuItem value={locales.EN}>English</MenuItem>
                    <MenuItem value={locales.RU}>Русский язык</MenuItem>
                    <MenuItem value={locales.ES}>Espagnol</MenuItem>
                    <MenuItem value={locales.PL}>Polska</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default LocalePicker;