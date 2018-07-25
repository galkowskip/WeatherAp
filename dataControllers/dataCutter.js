module.exports = (data) => {
    const newData = {
        summary: data.daily.summary,
        now: {
            summary: data.currently.summary,
            icon: data.currently.icon,
            temperature: data.currently.temperature,
            pressure: data.currently.pressure,
            windSpeed: data.currently.windSpeed,
            windBearing: data.currently.windBearing,
        },
        week: [
        ],
    }
    
    data.daily.data.map((day, i) => {
        newData.week[i] = {
            summary: day.summary,
            icon: day.icon,
            temperatureHigh: Math.round(day.temperatureHigh),
            temperatureLow:  Math.round(day.temperatureLow),
            pressure: day.pressure,
            windSpeed: day.windSpeed,
            windBearing: day.windSpeed,
        }
    })

    return newData
}