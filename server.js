const express = require('express');
const bodyParser = require('body-parser');

const myweb = express();

myweb.use(bodyParser.urlencoded({extended : true}));

myweb.use(bodyParser.json())

myweb.use(express.static('dist'));

const dbConfig = require('./dbconfig/database.config.js');
const mongoose = require('mongoose');
const path = require("path");

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {

    console.log("Connected to database successfully");
}).catch(err => {
    console.log("Could not connect to database. Exiting now...", err);
    process.exit();
});

myweb.get('/', (req, res) => {
  //  res.json("Welcome to the Union Money Transfer"); 
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

myweb.listen(3000, () => {
    console.log("Server is listening to port 3000");
});