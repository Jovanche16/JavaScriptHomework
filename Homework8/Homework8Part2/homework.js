function isColor(strColor) {

    if (!strColor) { return; }
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}

$(document).ready(function () {
    $('#generate').click(function () {

        let text = $('#textInput').val();
        let color = $('#colorInput').val();

        if (text && isColor(color)) {
            $("#generatedMessage").css({ "color": color }).text(text);
            $('#errorMessage').text('')
        }
        else {
            $("#errorMessage").css({ "color": "red" }).text(`Invalid input or color!`);
            $("#generatedMessage").text("")
        }
    })
});