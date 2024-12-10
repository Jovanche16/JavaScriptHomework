//Homework 3 Part 1

function getType(parametar) {
    let type = typeof (parametar)
    console.log("You have entered: " + type)
}

getType({ name: "Jovanche", age: 25 });
getType(12);
getType(false);
getType("This is a string!");
getType();

console.log("-----------------")
//Homework 3 Part 2

function humanDogAgeCalculator(age, isHuman) {
    if (isHuman) {
        return age * 7;
    }
    else {
        return age / 7;
    }
}

let humanYears = 25;
let dogYears = 175;
console.log("Your human years in dog years are " + humanDogAgeCalculator(humanYears, true));
console.log("Your dog years in human years are " + humanDogAgeCalculator(dogYears, false));

console.log("-----------------")
//Homework 3 Part 3

var atmState = 1000.00;
function atm(money) {
    if (atmState - money >= 0) {
        atmState -= money;
        return atmState;
    }
    else {
        console.log("Not enough money");
        return atmState;
    }
}
while (atmState > 0) {
    let withdrawMoney = prompt("Enter the amount that you would like to withdraw, or enter \"x\" to quit");
    
    if (withdrawMoney == "x") {
        console.log("Thank you for using the ATM. Goodbye!");
        break;
    }

    if (isNaN(withdrawMoney)) {
        console.log("Please enter a valid amount.");
        continue;
    }

    atmState = atm(parseFloat(withdrawMoney));

    if (atmState) {
        console.log("Your current balance is " + atmState);
    }

    else {
        console.log("You are out of money!")
        console.log("Thank you for using the ATM. Goodbye!");
        break;
    }
}