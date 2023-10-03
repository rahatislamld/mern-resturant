import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container>
      <Typography variant="h2">404 - Not Found</Typography>
      <Typography paragraph>
        The page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
