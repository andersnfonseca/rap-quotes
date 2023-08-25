const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

module.exports = app