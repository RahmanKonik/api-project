

// let create a first api endpoint by using the node js and express.

// write the node js and express code in server.js file which created first.

// server.js

// create three variable- express, app and port

const express = require("express");
const app = express();
const port = 3000;

// the use the GET method to show a message in port. sending a get req for a message.

app.get('/api', (req, res) =>{
    res.json({message:'Welcome to the api world!'});
});

// call the port and start the server on that port.

app.listen(port, ()=>{
    console.log(`API is running on http://localhost:${port}`);
});

// after that, run the server by use this command line-- 'node server.js' in ternimal.
// type this address- localhost:3000/api, enter
// display this message,
/*
{
message: "Welcome to the api world!"
}

*/