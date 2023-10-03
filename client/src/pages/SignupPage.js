import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const SignupPage = () => {
  return (
    <Container>
      <Typography variant="h2">Signup</Typography>
      <form>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default SignupPage;
