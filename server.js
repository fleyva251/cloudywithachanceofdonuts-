// bring express in
const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const port = 3000;

//middleware
app.use(cors())


//connect to database using mysql.js
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mcsp02donuts'
});

connection.connect(function(err){
    if(err){
        console.error('there was an error ' + err) 
    } 
    console.log('connected to mcsp02donuts')
})


//routes
app.get('/',(req,res) => {
   res.send('Welcome to donut land UwU')
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
    connection.query('SELECT * FROM donuts',function(error,results,fields){
        if(error) throw error;
        res.json(results)
    });
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