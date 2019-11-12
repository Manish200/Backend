
const express = require('express');
const app = express();
const router = require('./routes/routing');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//Importing Loggers 
var requestLogger = require('./utilities/RequestLogger')
var errorLogger = require('./utilities/ErrorLogger')
app.use(requestLogger)

app.use('/',router)
app.use(errorLogger);

if (!module.parent) {
    app.listen(2040);
}
console.log("Server listening in port 2040");

module.exports = app;