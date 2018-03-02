function viewInput() {
    var html = '<form class="form"><textarea class="input"></textarea><button class="btnInput">Input</button></form>'
    html = jQuery.parseHTML(html)
    $('.content').append(html)
}
function clear() {
    $('.content').empty()
}
function viewWeather() {

}
$(document).ready(() => {
    viewInput()
    $('.content').on('click', 'button', () => {
        clear() 

    })

})