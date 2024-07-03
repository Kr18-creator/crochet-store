const express = require('express');

const app = express();
const port = process.env.PORT||8080;

app.post('/cart', (req, res) => {
    // Assuming the request body contains the product ID
    const productId = req.body.productId;

    // // Add the product to the cart
    // // TODO: Implement the logic to add the product to the cart using the product ID

    res.status(200).json({ message: 'Product added to cart' });
});

app.delete('/cart', (req, res) => {
    // Assuming the request body contains the product ID
    // const productId = req.body.productId;

    // // Remove the product from the cart
    res.status(200).json({ message: 'Product removed from cart'});
});

app.get('/cart', (req, res) => {
    // // Get the products from the cart 
    const products = ["product1", "product2", "product3"]; 
    res.status(200).json({ products });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});