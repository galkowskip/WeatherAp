const express = require('express')
const app = express()
const port = process.env.port || 3000
const localize = require('./localize.js')
const path = require('path')

app.get('/', (req, res) => {
    console.log('1')
    app.use(express.static('client'))
})

app.get('/weather', (req, res) => {
    localize.weatherChecker(localize.findUser(req.query.userInput))
})

app.listen(port, () => {
    console.log("Server working on port " + port);
})