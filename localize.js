const key = require('./key.js')
const request = require('request')
const fs = require('fs')
const readJSON = require('./readJSON')
const maps = require('@google/maps').createClient({
    key: key.google,
})

const userInput = 'Rzeszów'

module.exports = localize = {
    //Weather checker!
    //Location finder!
    findUser() {
        maps.geocode({
            address: userInput,
        }, (err, res) => {
            var result = res.json.results

            var pos = result[0].geometry.location
            console.log(pos)

            console.log('Weather checking')

            var url = 'https://api.darksky.net/forecast/' + key.sky + '/' + pos.lat + ',' + pos.lng + '?exclude=hourly,minutely&units=si'
            console.log(url)
            request({
                url: url,
            }, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    readJSON(body, (data) => {
                        console.log(data)
                    });
                } else {
                    console.log('fukup')
                }
            })

        }
        )
    }
}
