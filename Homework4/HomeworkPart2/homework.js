function sumOfNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum;
}

function enterNumbers() {
    let numbersArray = [];
    for (let i = 0; i < 5; i++) {
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

console.log("Enter 5 numbers.")
let numbers = enterNumbers();
console.log("The sum of the numbers is " + sumOfNumbers(numbers));