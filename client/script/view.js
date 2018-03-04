function viewWeather(res) {
    for(var i = 0; i < 8; i++) {
        const html = '<div class="flex-box"><div class="wbox"><div class="ico">' + res.week[i].icon + '</div><div class="wtext"><p class="temperatureHigh">' + res.week[i].temperatureHigh + '</p><p class="temperatureLow">' + res.week[i].temperatureLow + '</p><p class="wind"></p><p class="summary">' + res.week[i].summary + '</p></div></div></div>'
        $('.content').append(html)
    }
}

$(document).ready(() => {
    $('.content').on('click', 'button', (event) => {
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
                $('.content').empty()
                viewWeather(res)
            }
        });
        
        

    })

})