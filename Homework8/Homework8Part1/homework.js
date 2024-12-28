$(document).ready(function () {
    $('#greet').click(function () {
        let name = $('#name').val();
        console.log(name)
        if (name) {
            $("#greetMessage").css({ "color": "green" }).text(`Hello there ${name}!`);
        }
        else {
            $("#greetMessage").css({ "color": "red" }).text(`Please enter name!`);
        }
    })
});