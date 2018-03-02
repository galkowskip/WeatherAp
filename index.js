const express = require('express');
const app = express();
const port = process.env.port || 3000
const localize = require('./localize.js')
const path = require('path')

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

    app.get('/', (req, res) => {
        app.use(express.static('client'))
    })
    
    app.get('/weather', (req, res) => {
        console.log(req.query.userInput)
        localize.findUser(req.query.userInput, (data) => {
            //console.log(data)
            res.send(data)
        })
    })
});


