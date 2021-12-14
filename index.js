const express = require('express')
const app = express()

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

//rotas para os pedidos
app.use('/',require('./routes/mainRoute'))
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/tipos', require('./routes/tiposRoute'))
app.use('/utilizador',require('./routes/utilizadorRoute'))

const port =3000
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})