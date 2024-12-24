
let numbers = [2, 4, 5, 6, 8];

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
