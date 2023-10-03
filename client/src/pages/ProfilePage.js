import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const ProfilePage = () => {
  return (
    <Container>
      <Typography variant="h2">Profile</Typography>
      <form>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <Button variant="contained" color="primary" fullWidth>
          Update Profile
        </Button>
      </form>
    </Container>
  );
};

export default ProfilePage;
