import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import locales from "../../shared/constants/locales";
import GlobalContext from "../../shared/contexts/GlobalContext";
import localStorageKeys from "../../shared/constants/localStorageKeys";

export default function LanguagePicker() {
    const { locale, setLocale } = useContext(GlobalContext);

    const handleChange = (event) => {
        setLocale(event.target.value);
        localStorage.setItem(localStorageKeys.LOCALE, event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Language</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={locale}
                label="Language"
                onChange={handleChange}
            >
                <MenuItem value={locales.EN}>English</MenuItem>
                <MenuItem value={locales.ES}>Espagnol</MenuItem>
                <MenuItem value={locales.PL}>Polska</MenuItem>
                <MenuItem value={locales.RU}>Русский язык</MenuItem>
            </Select>
        </FormControl>
    )
}