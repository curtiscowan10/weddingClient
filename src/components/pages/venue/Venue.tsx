import "./Venue.scss";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Map from "./map/Map";

const Venue = () => (
  <Box className="venue">
    <Typography variant="h4" gutterBottom>Castle Leslie Estate</Typography>
    <Typography variant="body1" paragraph>
      Located in Glaslough, County Monaghan, Ireland.
    </Typography>
    <Box sx={{ width: '100%', height: '300px', overflow: 'hidden', mt: 2 }}>
      <Map />
    </Box>
  </Box>
);

export default Venue;
