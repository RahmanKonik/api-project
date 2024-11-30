

const express = require("express")

const app = express();

const port = 3001;

// api start

app.listen(port, () => {
    console.log("This app is starting on the port 3001/")
})

// get method

app.get('/movies', (req, res) => {
    res.json("message: welcome to the express.")
})