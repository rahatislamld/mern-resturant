import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const OrderCard = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
        <Card sx={{ maxWidth: 345, marginBottom: '2rem' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {item.description}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                    ${item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" color="primary" onClick={decreaseQuantity}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{quantity}</Typography>
                <IconButton size="small" color="primary" onClick={increaseQuantity}>
                    <AddIcon />
                </IconButton>
                <Button size="small" color="primary" variant="contained">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default OrderCard;
