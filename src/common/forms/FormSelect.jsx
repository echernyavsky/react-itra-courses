import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export default function FormSelect({ control }) {
    return (
        <Controller
            name="iceCreamType"
            render={({ field }) => (
                <Select
                    {...field}
                    options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ]}
                />
            )}
            control={control}
            defaultValue=""
        />
    );
}
