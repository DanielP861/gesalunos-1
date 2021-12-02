const express = require('express')
const path = require('path')
const app = express()
const connection = require('./dbconnection')
app.use(express.static('./public'))

//localhost:5000/bd
app.get('/bd', (req,res) => {
    connection.query('SELECT * FROM city', function(err,result){
        if(err){
            console.log(err)
        }
        else {
            res.json(result)
        }
    })
})

//localhost:5000
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

const port =3000
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})