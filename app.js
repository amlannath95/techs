var express = require('express');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/techdbmvc';

var app = express();

mongoose.connect(url, {useNewUrlParser:true});
var con = mongoose.connection;

con.on('open', () => {
    console.log('It is connected...');
})

app.use(express.json());

var techRouter = require('./routes/techies');
app.use('/techies', techRouter);

var PORT = 9898;

app.listen(PORT, () => {
    console.log('Server started at '+PORT);
})