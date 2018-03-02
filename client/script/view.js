function viewInput() {
    var html = '<form class="form"><textarea class="input"></textarea><button class="btnInput">Input</button></form>'
    html = jQuery.parseHTML(html)
    $('.content').append(html)
}

function viewWeather() {

}
$(document).ready(() => {
    viewInput()
    $('.content').on('click', 'button', (event) => {
        event.preventDefault()
        var userInput = $('form').serializeArray()
        $.get("/weather", userInput,
            (data) => {
                console.log(data)
            }
        );
        //$('.content').empty()
        

    })

})