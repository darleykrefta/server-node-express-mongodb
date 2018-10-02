const express = require('express')
const app = express()
const clienteRoute = require('./routes/cliente.router')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//middleware function
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(clienteRoute)
app.use(express.static('public'))

//tratativas de erros no middleware
app.use((req, res, next) => {
    res.status(404).send('Acho que voce está perdido!')
})

//tratativas de erros com statics pages
app.use((err, req, res, next) => {
    //print no console qual erro deu
    console.log(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

app.listen(3000, () => console.info(`Server está ativo em ${3000}`))