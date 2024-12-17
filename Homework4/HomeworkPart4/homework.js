
function generateFormattedNumbers() {
    let formattedNumbersArray = [];
    let result = ""
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            result += i;
            formattedNumbersArray.push(result)
            result = "";
        }
        else {
            result += (i + " ")
        }
    }
    return formattedNumbersArray;
}
let formattedNumbersArray = generateFormattedNumbers();
for (let i = 0; i < formattedNumbersArray.length; i++) {
    console.log(formattedNumbersArray[i])
}

