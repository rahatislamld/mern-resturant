import React from "react";
import { Container, Typography, Button } from "@mui/material";

const ManagerDashboard = () => {
  return (
    <Container>
      <Typography variant="h2">Manager Dashboard</Typography>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        View Reservations
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Check Staff Roster
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        View Feedback
      </Button>
    </Container>
  );
};

export default ManagerDashboard;
