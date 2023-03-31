import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function FormDatePicker({ control, name, label, ...props}) {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                render={({ field: { ref, ...rest } }) => (
                    <DatePicker
                        label={label}
                        format="dd/MM/yyyy"
                        {...rest}
                    />
                )}
                name={name}
                control={control}
            />
        </FormControl>
    );
}
