function isColor(strColor) {

    if (!strColor) { return; }
    let s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}

$(document).ready(function () {
    $('#generate').click(function () {

        let text = $('#textInput').val();
        let strcolor = $('#colorInput').val();

        if (text && isColor(strcolor)) {
            $("#generatedMessage").css({ "color": strcolor }).text(text);
            $('#errorMessage').text('')
        }
        else {
            $("#errorMessage").css({ "color": "red" }).text(`Invalid input or color!`);
            $("#generatedMessage").text("")
        }
    })
});