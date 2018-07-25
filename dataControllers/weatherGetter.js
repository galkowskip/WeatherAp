const key = require('./key')
const maps = require('@google/maps').createClient({
    key: key.google,
})
const axios = require('axios')
const dataCutter = require('./dataCutter')

module.exports = (input, err) => {
    return new Promise((resolve, reject) => {

    maps.geocode({address: input}, (err, res) => {

        const result = res.json.results[0].geometry.location
        const url = 'https://api.darksky.net/forecast/' + key.sky + '/' + result.lat + ',' + result.lng + '?exclude=hourly,minutely&units=si'

        axios.get(url)
            .then((response) => {

                //Cutting off unnecesary data

                data = dataCutter(response.data)
                resolve(data)
            })
            if(!data) {
                reject('failed')
            }
        })
    })
}