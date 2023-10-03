import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        marginTop: "auto",
        padding: "2rem 0",
        background: "#3f51b5",
        color: "white",
      }}
    >
      <Typography variant="body2" color="inherit" align="center">
        © 2023 Restaurant Name. All Rights Reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
