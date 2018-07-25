const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const morgan = require('morgan')
const session = require('express-sessions')

//Ejs configuration

app.use(express.static(__dirname + '/public'))

//Logger format
app.use(morgan('tiny'))
//Flash connect, express.session bugged

require('./routes/app')(app)

app.listen(port, () => {
    console.log("Listening on port: " + port)
})