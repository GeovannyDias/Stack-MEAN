"use strict";
const express = require('express');
const connDB = require('../config/db');
const cors = require('cors');

// CREATE SERVER
const app = express();
const port = process.env.PORT || 4000; // use port 4000 unless there exists a preconfigured port

// Connection DB
connDB();

// Middleware
app.use(express.json());
app.use(cors());

// ROUTES

// app.get('/', (req, res) => {
//     res.send('Running server...');
// });

app.use('/api/products', require('./routes/product'));




// Running server
app.listen(port, ()=> {
    console.log('Running server...', 'Port:', port);
});