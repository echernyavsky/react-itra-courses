import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import FormSelect from "../../../common/forms/FormSelect.jsx";
import emailDesigns from "../../../shared/constants/emailDesigns.js";
import { createTemplate } from "../../../shared/apis/emailTemplatesApi.js";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.js";
import FormMarkdown from "../../../common/forms/FormMarkdown.jsx";

export default function NewEmailTemplate() {
    const {
        register,
        handleSubmit,
        control,
        formState: {
            errors
        }
    } = useForm();

    let navigate = useNavigate();

    const onFormSubmit = async (values) => {
        try {
            await createTemplate(values);
            alert('Template successfully created.');
            navigate(routes.EMAIL_TEMPLATES.ROOT);
        } catch (err) {
            alert('Something went wrong');
            throw err;
        }
    }

    return (
        <>
            <h1>
                New template form
            </h1>
            <Box my={2}>
                <Grid>
                    <Grid item xs={12} md={9}>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <Box my={2}>
                                <TextField
                                    error={errors.subject}
                                    helperText={errors.subject && "Incorrect entry."}
                                    label="Subject"
                                    fullWidth
                                    {...register("subject", { required: true, minLength: 3 })}
                                />
                            </Box>
                            <Box my={2}>
                                <FormSelect
                                    control={control}
                                    name="design"
                                    label="Design"
                                    options={emailDesigns}
                                    fullWidth
                                />
                            </Box>
                            <Box my={2}>
                                <FormMarkdown
                                    control={control}
                                    name="body"
                                    label="Body"
                                />
                            </Box>
                            <Box my={2}>
                                <Button type="submit" variant="contained">Submit</Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}