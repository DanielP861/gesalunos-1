const express = require('express')
const connection = require('../dbconnection')
const utilizadorRoute = express.Router()

utilizadorRoute.post('/', (req,res) => {
    console.log(req.body)
})

module.exports = utilizadorRoute