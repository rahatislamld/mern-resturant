import React from "react";
import { Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h2">About Us</Typography>
      <Typography paragraph>
        Our restaurant was founded in 1990 with a mission to bring quality food
        to the community.
      </Typography>
      <Typography paragraph>
        Through the years, we've expanded and now serve thousands of customers
        daily. Our team is dedicated to ensuring a memorable dining experience.
      </Typography>
    </Container>
  );
};

export default AboutPage;
