import React, {useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FormattedMessage} from "react-intl";
import locales from "../../shared/constants/locales";
import localStorageKeys from "../../shared/constants/localStorageKeys";

export default function LocalePicker({ currentLocale, onLocaleChanged }) {
    const [locale, setLocale] = useState(currentLocale);

    const onChanged = (e) => {
        const { value } = e.target;
        setLocale(value);
        localStorage.setItem(localStorageKeys.LOCALE, value);
        onLocaleChanged(value);
    }

    return (
        <Box>
            <FormControl variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                    <FormattedMessage id="nav.language-picker" />
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    value={locale}
                    onChange={onChanged}
                    label="Age"
                >
                    <MenuItem value={locales.EN}>English</MenuItem>
                    <MenuItem value={locales.RU}>Русский</MenuItem>
                    <MenuItem value={locales.PL}>Polska</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}