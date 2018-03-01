const express = require('express')
const app = express()
const port = process.env.port || 3000
const localize = require('./localize.js')
//Keys

localize.findUser()

app.use(express.static('/static'))

app.get('/', (req, res) => {
    app.use(express.static('/static'))
     
})

app.listen(port, () => {
    console.log("Server working on port " + port);
})
