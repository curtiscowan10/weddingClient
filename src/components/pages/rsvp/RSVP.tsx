import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './RSVP.scss';

type FormData = {
  name: string;
  email: string;
  attending: string;
  menuItem: string;
  comments: string;
};

const RSVP = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you can handle the form submission, e.g. send the data to your server
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} className="rsvp">
      <Typography variant="h4" gutterBottom>RSVP</Typography>
      <TextField
        label="Name"
        {...register("name", { required: "This field is required" })}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register("email", { required: "This field is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <TextField
        label="Attending"
        {...register("attending", { required: "This field is required" })}
        error={Boolean(errors.attending)}
        helperText={errors.attending?.message}
      />
      <FormControl>
        <InputLabel id="menu-item-label">Menu Item</InputLabel>
        <Select
          labelId="menu-item-label"
          defaultValue=""
          onChange={(e) => setValue("menuItem", e.target.value)}
        >
          <MenuItem value="chicken">Chicken</MenuItem>
          <MenuItem value="fish">Fish</MenuItem>
          <MenuItem value="vegetarian">Vegetarian</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Comments"
        {...register("comments")}
        multiline
        rows={4}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >
          Submit
      </Button>
    </Box>
  );
};

export default RSVP;
