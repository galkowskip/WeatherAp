const fs = require('fs')

module.exports = function readJSON(data, callback) {

    const obj = JSON.parse(data)
    const res = {
        summary: obj.daily.summary,
        now: {
            summary: obj.currently.summary,
            icon: obj.currently.icon,
            temperature: obj.currently.temperature,
            pressure: obj.currently.pressure,
            windSpeed: obj.currently.windSpeed,
            windBearing: obj.currently.windBearing,
        },
        week: [
        ],
    }
    function daily() {
            for(var i = 0; i < obj.daily.data.length; i++) {
                //console.log(i)
                res.week[i] = {
                    summary: obj.daily.data[i].summary,
                    icon: obj.daily.data[i].icon,
                    temperatureHigh: obj.daily.data[i].temperatureHigh,
                    temperatureLow: obj.daily.data[i].temperatureLow,
                    pressure: obj.daily.data[i].pressure,
                    windSpeed: obj.daily.data[i].windSpeed,
                    windBearing: obj.daily.data[i].windSpeed,
                } 
            }
        }
        daily()
        //console.log(res)
    
    return res;
}