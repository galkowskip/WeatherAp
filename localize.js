const key = require('./key.js')
const request = require('request')
const readJSON = require('./readJSON')
const maps = require('@google/maps').createClient({
    key: key.google,
})




module.exports = localize = {
    weatherChecker(pos, callback) {
        //console.log('wchecker!')
        //Weather Checker
        var url = 'https://api.darksky.net/forecast/' + key.sky + '/' + pos.lat + ',' + pos.lng + '?exclude=hourly,minutely&units=si'
        console.log(url)
    
        request({
            url: url,
        }, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                //Get important data from JSON
                var data = readJSON(body)
                //console.log(data)
                callback(data)

            } else {
                console.log('fukup')
            }
        })
    },

    //Location finder!
    findUser(userInput, callback) {
        maps.geocode({
            address: userInput,
        }, (err, res) => {
            var result = res.json.results

            var pos = result[0].geometry.location
            //console.log(pos)
            localize.weatherChecker(pos, callback)  
        }
        )
    },
}
