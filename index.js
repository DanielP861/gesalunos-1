const express = require('express')
const path = require('path')
const app = express()
const connection = require('./dbconnection')
app.use(express.static('./public'))


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/navbar',(req,res) => {
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})

app.get('/tipos', (req,res) => {
    connection.query('SELECT * FROM tipos', (err,result) => {
        if(err)
            res.json('Ocorreu um problema na base de dados...')
        else {
            res.json(result)
        }
    })
})

const port =3000
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})