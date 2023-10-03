import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const CartPage = () => {
  // Dummy data for demonstration
  const cartItems = [
    { id: 1, name: "Pizza", quantity: 2, price: 10 },
    { id: 2, name: "Burger", quantity: 1, price: 8 },
  ];

  return (
    <Container>
      <Typography variant="h2">Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity} Price: $${
                item.price * item.quantity
              }`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
