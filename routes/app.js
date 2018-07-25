const weatherGetter = require('../dataControllers/weatherGetter')

module.exports = (app) => {
    //GET requests
    //index = input
    //weather = display weather boxes
    app.get('/', (req, res) => (
        app.use('../views')
    ))
    app.get('/weather', (req, res) => {
        weatherGetter(req.query.city)
            .then((result) => {
                res.send({data: result})
            })
            .catch((err) => {
                throw err;
            })
    })
}