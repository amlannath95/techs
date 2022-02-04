const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/techdbmvc';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('It is connected...');
})

app.use(express.json());

const techRouter = require('./routes/techies');
app.use('/techies', techRouter);

var PORT = 9898;

app.listen(PORT, () => {
    console.log('Server started at '+PORT);
})