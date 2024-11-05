

const express = require("express");
const app = express();
const port = 3000;

// sample of product data¨.

let products = [
    {id: 1, name: 'Oil', price: 3.99, discount: '20%', store: 'Prisma'},
    {id: 2, name: 'Banana', price: 1.99, discount: '10%', store: 'K-market Kalave'},
    {id: 3, name: 'Fish', price: 6.99, discount: '25%', store: 'S-market'}
];

//middleware to parse json data.

app.use(express.json());

// GET method for call the all products detail.

app.get('/products', (req, res) => {
    res.json(products);
});

// Get method by using  product ID

app.get('/products/:id', (req, res) => {
    const productID = parseInt(req.params.id);
    const product = products.find(p => p.id === productID);

    if(product) {
        res.json(product);
    } else{
        res.status(404).json( {message: "Product not found!" });
    }
});

// Post method for add a new product

app.post('/products', (req, res) => {

    const newProduct = req.body;

    newProduct.id = products.length + 1;

    products.push(newProduct);

    res.status(201).json(newProduct);
});

// Put method for update a product

app.put('/products/:id', (req, res) => {

    const productid = parseInt(req.params.id);

    const productIndex = products.findIndex(p => p.id === productid);

    if(productIndex !== -1) {
        products[productIndex] = {id: productid, ...req.body };
        res.json(products[productIndex]);

    } else {
        res.status(404).json({ message: "Product not found!"});
    }

});

// Delete method for remove a product.

app.delete('/products/:id', (req, res) => {

    const productId = parseInt(req.params.id);

    const productsIndex = products.findIndex(p => p.id === productId);

    if( productsIndex !== -1) {

        const deteleIndex = products.splice(productsIndex, 1);

        res.json({ message: "Product deleted!", deteleIndex});

    } else {
        res.status(404).json({message: "Product not found!"});
    }

});



// starting thr server

app.listen(port, () => {

    console.log(`Server running on http://localhost:${port}`);
});
