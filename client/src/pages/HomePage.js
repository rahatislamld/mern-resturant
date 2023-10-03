import React from "react";
import { Container, Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h1">Welcome to Our Restaurant</Typography>
      <Typography variant="h5" paragraph>
        Experience the best cuisine in the city.
      </Typography>
      <Button variant="contained" color="primary">
        View Menu
      </Button>
    </Container>
  );
};

export default HomePage;
