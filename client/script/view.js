function viewWeather() {

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
            }
        });
        //$('.content').empty()
        

    })

})