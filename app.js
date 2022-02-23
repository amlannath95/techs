var express = require('express');
var mongoose = require('mongoose');
const cors = require("cors");

//creating a database with name techdbmvc
var url = 'mongodb://localhost/techdbmvc';

var app = express();
app.use(cors());

mongoose.connect(url, {useNewUrlParser:true});
var con = mongoose.connection;

con.on('open', () => {
    console.log('It is connected...');
})

app.use(express.json());

var techRouter = require('./routes/techies');
app.use('/', techRouter);

//set port, listen for requests
var PORT = 9898;
app.listen(PORT, () => {
    console.log('Server started at '+PORT);
})