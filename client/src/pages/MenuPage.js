import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import OrderCard from "../components/OrderCard";

const MenuPage = () => {
  // Dummy data for demonstration
  const items = [
    {
      id: 1,
      name: "Pizza",
      description: "Cheesy goodness",
      price: 10,
      image: "pizza.jpg",
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy delight",
      price: 8,
      image: "burger.jpg",
    },
  ];

  return (
    <Container>
      <Typography variant="h2">Our Menu</Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <OrderCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MenuPage;
