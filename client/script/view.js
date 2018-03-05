function getDate(i) {
    var date = new Date
    date.setDate(date.getDate() + i)
    date = date.toString().slice(0,15);
    return(date);
}
function viewWeather(res) {
    for(var i = 0; i < 8; i++) {
        const html = '<div class="wbox"><div class="ico">' + res.week[i].icon + '</div><div>' + getDate(i) + '</div><div class="wtext"><div class="temperatureHigh">' + res.week[i].temperatureHigh + '°C</div><div class="temperatureLow">' + res.week[i].temperatureLow + '°C</div><div class="wind"></div><div class="summary">' + res.week[i].summary + '</div></div></div>'
        $('#content').append(html);
    }
}

$(document).ready(() => {
    $('#content').on('click', 'button', (event) => {
        event.preventDefault()
        var data = {
            userInput: $('.input').val()
        }
        console.log(data)
        $.ajax({
            type: "get",
            url: "/weather",
            data: data,
            success: function (res) {
                console.log(res)
                $('#content').empty()
                $('#content').removeClass('boxInput')
                viewWeather(res)
            }
        });
    })
})