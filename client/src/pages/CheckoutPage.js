import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const CheckoutPage = () => {
  return (
    <Container>
      <Typography variant="h2">Checkout</Typography>
      <form>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Credit Card Number"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" fullWidth>
          Complete Order
        </Button>
      </form>
    </Container>
  );
};

export default CheckoutPage;
