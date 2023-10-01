import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function FormSelect({ control, name, label, options , ...props}) {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                render={({ field }) => (
                    <Select {...field} labelId={labelId} label={label}>
                        <MenuItem>test</MenuItem>
                        {options.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                )}
                name={name}
                control={control}
            />
        </FormControl>
    );
}
