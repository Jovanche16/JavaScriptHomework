function promptForNumber(message) {
    let number = parseInt(prompt(message));
    while (isNaN(number) || number <= 0) {
        number = parseInt(prompt("Please enter a valid positive number: "));
    }
    return number;
}

function promptForList(message, count) {
    let list = [];
    for (let i = 0; i < count; i++) {
        let item = prompt(message);
        while (item == null || item == "") {
            item = prompt("Invalid input try again!");
        }
        list.push(item);
    }
    return list;
}

function updateList(elementId, items) {
    let listElement = document.getElementById(elementId);
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        li.innerText = items[i];
        listElement.appendChild(li);
    }
}

let recipeName = prompt("Enter the name of the recipe:");
document.getElementById('recipeTitle').innerText = recipeName;

let numberOfIngredients = promptForNumber("How many ingredients do we need for the recipe?");
let ingredients = promptForList("Enter the name of ingredient: ", numberOfIngredients);
updateList("ingredientsList", ingredients)

let numberOfSteps = promptForNumber("How many preparation steps are there for the recipe?");
let preparationSteps = promptForList("Enter the step: ", numberOfSteps);
updateList("preparationSteps", preparationSteps)

let preparationTime = promptForNumber("How long would it take to prepare this in minutes?");
document.getElementById('preparationTime').innerText = `Duration: ${preparationTime}min`;
