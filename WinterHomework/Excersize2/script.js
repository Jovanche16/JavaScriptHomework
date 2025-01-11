$(document).ready(function () {
    const units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function translate(n) {
        const numStr = String(n);
        const len = numStr.length;
    
        if (len === 1) {
            return units[n];
        } else if (len === 2) {
            if (n < 20) {
                return teens[n - 10];
            } else {
                return tens[Math.floor(n / 10) - 2] + (n % 10 ? ' ' + units[n % 10] : '');
            }
        } else if (len === 3) {
            return units[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + translate(n % 100) : '');
        } else if (len === 4 || len === 5 || len === 6) {
            return translate(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + translate(n % 1000) : '');
        } else if (n===1000000){
            return 'One Million';
        }
    }
    

    $("input").on("keyup", function () {
        const rawInput = $(this).val();
        if (rawInput === "") {
            $(".output").removeClass("error-output valid-output").empty();
        } else if (isNaN(rawInput) || rawInput.includes(".") || rawInput.includes(" ")) {
            $(".output").removeClass("valid-output").addClass("error-output").text("Invalid input. Only whole numbers are allowed.");
        } else {
            const number = parseInt(rawInput, 10);
            if (number < 0 || number > 1000000) {
                $(".output").removeClass("valid-output").addClass("error-output").text("Invalid input. Please enter a number between 0 and 1,000,000.");
            } else {
                $(".output").removeClass("error-output").addClass("valid-output").text(translate(number));
            }
        }
    });
});