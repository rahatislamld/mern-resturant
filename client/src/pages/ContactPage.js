import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h2">Contact Us</Typography>
      <form>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
