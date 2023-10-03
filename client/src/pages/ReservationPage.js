import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const ReservationPage = () => {
  return (
    <Container>
      <Typography variant="h2">Make a Reservation</Typography>
      <form>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Time"
          type="time"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Number of People"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" fullWidth>
          Reserve
        </Button>
      </form>
    </Container>
  );
};

export default ReservationPage;
