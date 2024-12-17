function sumOfMinAndMax(numbersArray) {
    let min = numbersArray[0];
    let max = numbersArray[0];

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < min) {
            min = numbersArray[i];
        }
        if (numbersArray[i] > max) {
            max = numbersArray[i];
        }
    }
    return min + max;
}
function enterNumbers(arrayLength) {
    let numbersArray = [];
    for (let i = 0; i < arrayLength; i++) {
        let inputNumber = parseInt(prompt("Enter a number:"));
        if (!isNaN(inputNumber)) {
            numbersArray.push(inputNumber);
        }
        else {
            console.log("Please enter a valid number!")
            i--;
        }
    }
    return numbersArray;
}
function getValidLength() {
    let number;
    while (true) {
        number = parseInt(prompt("Enter the length of the array of numbers you want to collect: "));
        if (!isNaN(number) && number > 1) {
            break;
        }
        else {
            console.log("Invalid input, please enter a positive number.");
        }
    } return number;
}

let arrayLength = getValidLength();
let numbersArray = enterNumbers(arrayLength);
console.log("The sum of the numbers is " + sumOfMinAndMax(numbersArray))

