import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import locales from "../../shared/constants/locales";
import GlobalContext from "../../shared/contexts/GlobalContext";
import Box from "@mui/material/Box";

export default function LocalePicker() {
    const { locale, setLocalization } = useContext(GlobalContext);

    const onLocaleChanged = (e) => {
        setLocalization(e.target.value);
    }

    return (
        <Box maxWidth={200}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locale}
                    label="Language"
                    onChange={onLocaleChanged}
                >
                    <MenuItem value={locales.EN}>English</MenuItem>
                    <MenuItem value={locales.ES}>Espanol</MenuItem>
                    <MenuItem value={locales.PL}>Polska</MenuItem>
                    <MenuItem value={locales.RU}>Русский</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}