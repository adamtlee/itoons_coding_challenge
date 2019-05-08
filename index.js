
const express = require('express'); 
const db = require('./db/db');

// import express from 'express'; 
// import db from './db/db'; 

const bodyParser = require('body-parser'); 

const app = express(); 

const port = (process.env.PORT || 3000); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true})); 

const songRoute = require('./routes/song.routes');

app.use('/songs', songRoute);
// app.get('/songs', (req, res) => {
//     res.status(200).send({
//         success: 'true',
//         message: 'songs retrieved successfully',
//         songs: db
//     })
// })
app.listen(port, () => {
    console.log(`Server running on ${port}`)
}); 

module.exports = app;
