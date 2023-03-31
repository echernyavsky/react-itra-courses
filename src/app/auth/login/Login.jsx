import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import FormSelect from "../../../common/forms/FormSelect.jsx";
import genres from "../../../movies/constants/genres.js";
import FormDatePicker from "../../../common/forms/FormDatePicker.jsx";

export default function Login() {
  const { register, control, handleSubmit, formState: { errors }} = useForm();

  const onFormSubmit = (values) => {
      alert(JSON.stringify(values));
  }

  return (
      <>
        <Box my={2}>
          <Typography variant="h2">Login</Typography>
        </Box>
        <Box my={2}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
              <Box my={2}>
                  <TextField
                      label="Username"
                      {...register("username", { required: true })}
                  />
              </Box>
              <Box my={2}>
                  <TextField
                      type="password"
                      label="Password"
                      {...register("password", { required: true })}
                  />
              </Box>
              <Box my={2}>
                  <Button type="submit" variant="contained">Submit</Button>
              </Box>
          </form>
        </Box>
      </>
  )
}
