const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const quoteRoute = require('../routes/quoteRoute')
const cors = require('cors')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use(cors())

app.use('/api/v1/quotes', quoteRoute)

//conexão do mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cibjkve.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao DB')
})
.catch((error) => {
    console.log(error)
})

module.exports = app