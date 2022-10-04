import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export default function FormSelect({ control, name, options }) {
    return (
        <Controller
            name={name}
            render={({ field }) => (
                <Select
                    {...field}
                    options={options}
                />
            )}
            control={control}
            defaultValue=""
        />
    );
}
