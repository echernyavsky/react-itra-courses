import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MDEditor from '@uiw/react-md-editor';

export default function FormMarkdown({ control, name, label, ...props}) {
    return (
        <FormControl {...props} fullWidth>
            <Controller
                render={({ field }) => (
                    <>
                        <MDEditor
                            textareaProps={{
                                placeholder: label
                            }}
                            {...field}
                        />
                    </>
                )}
                name={name}
                control={control}
            />
        </FormControl>
    );
}
