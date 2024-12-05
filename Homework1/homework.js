let numberOfPhones = 30;
let phonePrice = 119.95;
let taxRate = 0.05;

let phonePriceWithTax = phonePrice + phonePrice * taxRate;

let totalPrice = numberOfPhones * phonePriceWithTax;

console.log("The price for 30 phones is "+ totalPrice);