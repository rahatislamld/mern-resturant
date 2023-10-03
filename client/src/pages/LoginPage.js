import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const LoginPage = () => {
  return (
    <Container>
      <Typography variant="h2">Login</Typography>
      <form>
        <TextField
          label="Username"
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
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <br />
    </Container>
  );
};

export default LoginPage;
