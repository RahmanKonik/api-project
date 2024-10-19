

// server.js file

// const variable

const express = require("express");
const app = express();
const port = 3000;

//use build-in middleware to parse JSON request bodies.

app.use(express.json());

// add a restuarant data in an array.

let restaurants = [
    { id: 1, name: 'Pizza Palace', type: 'Italian', status: 'Take away & Eat there' },
    { id: 2, name: 'Sushi World', type: 'Japanese', status: 'Take away & Eat there' },
    { id: 3, name: 'Pizza & Kebab', type: 'Italian', status: 'Take away only' },
    { id: 4, name: 'Sushi & CL', type: 'Chinese', status: 'Eat there & Home Delivery' },
    { id: 5, name: 'Pizza Services', type: 'Bangladeshi', status: 'Take away & Eat there, home delivery' },
    { id: 6, name: 'Fresh & Hot food', type: 'Indian', status: 'Take away & Eat there' }
];

// get method for sending the  request to the server.

// get method for all restuarants.

app.get('/api/restaurants', (req, res)=>{

    //res.json({message: "2.Welcome to the API world!"});

    res.json(restaurants);

});

//get method for a restuarant ID.

app.get('/api/restaurants/:id', (req, res)=>{
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));

    if(restaurant){
        res.json(restaurant);
    } else {
        res.status(404).json({message:'Restaurant not found'});
    }
});

// Add a new restuarant by POST method.

app.post('/api/restaurants', (req, res)=>{

    const newRestaurant = {
        id: restaurants.length + 1,
        name: req.body.name,
        type: req.body.type,
        status: req.body.status
    };
    // push method for push in main data store.

    restaurants.push(newRestaurant);

    // give notification, it is successefully added.

    res.status(201).json(newRestaurant);

});

// Update a restuarant

app.put('/api/restaurants/:id', (req, res)=>{
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));

    if(restaurant){
        restaurant.name = req.body.name;
        restaurant.type = req.body.type;
        restaurant.status = req.body.status;
        res.json(restaurant);
    } else{
        res.status(404).json({message:'Restaurant not found'});
    }
});

// Delete a restuarant.

app.delete("/api/restaurants/:id", (req, res)=>{
    restaurant = restaurants.find(r => r.id !== parseInt(req.params.id));
    res.json({message: 'Restaurant deleted.'})
});


// call the port and showing the message in a brower

app.listen(port,()=>{
    console.log(`API is running on the server:http://localhost:${port}`);
});