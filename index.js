// bring express in
const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/',(req,res) => {
    res.send('Welcome To Donut Land UwU')
});

//donut routes
//CREATE
app.post('/donuts', (req,res) => {
    //get an object via req.body
    res.send('placeholder')
});                       

//READ
//GET all donuts 
app.get('/donuts', (req,res) => {
    res.send('Sorry no donuts yet :(')
});
//GET single donut
app.get('/donuts/:id', (req,res) => {
    res.send('no donuts here either OwO')
});

//Delete a donuts
app.delete('/donuts/:id',(req,res) => {
    res.send('A single donut')
});
//Update a donut 
app.patch('/donuts/:id',(req,res) => {
    res.send('placeholder update') 
});


//listen on ports
app.listen(port, () => (
    console.log(`Listening on port ${port} `)
));