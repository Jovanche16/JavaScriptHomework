
function promptForNumber(message) {
    let number = parseInt(prompt(message));
    while (isNaN(number) || number <= 0) {
        number = parseInt(prompt("Please enter a valid positive number: "));
    }
    return number;
}

function enterNumbers(numberLength) {
    let numbersArray = [];
    for (let i = 0; i < numberLength; i++) {
        let inputNumber = promptForNumber("Enter a number:");
        numbersArray.push(inputNumber);
    }
    return numbersArray;
}

let numberLength = promptForNumber("Enter lenth of the numbers you want to collect: ");
let numbers = enterNumbers(numberLength);

let numberList = document.getElementById('numberList');
let sumElement = document.getElementById('sum');
let equationElement = document.getElementById('equation');

let sum = 0;
let equation = '';

for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement('li');
    li.innerText = numbers[i];
    numberList.appendChild(li);

    sum += numbers[i];
    if (i === numbers.length - 1) {
        equation += `${numbers[i]}`;
    }
    else {
        equation += `${numbers[i]} + `;
    }
}

sumElement.innerText = `Sum: ${sum}`;
equationElement.innerText = `Equation: ${equation} = ${sum}`;
