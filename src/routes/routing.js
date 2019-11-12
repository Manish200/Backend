//Import necessary modules
const express = require("express")
const routing = express.Router()


routing.get('/hello', (req,res,next) => {
//Code the route as specified in QP
res.send('hello')
})


module.exports = routing