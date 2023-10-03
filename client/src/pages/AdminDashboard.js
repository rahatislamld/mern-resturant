import React from "react";
import { Container, Typography, Button } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Container>
      <Typography variant="h2">Admin Dashboard</Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Manage Orders
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Manage Users
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Manage Menu
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        View Feedback
      </Button>
    </Container>
  );
};

export default AdminDashboard;
