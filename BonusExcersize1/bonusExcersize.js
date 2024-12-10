function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear;
}

while (true) {
    let yourBirthYear = parseInt(prompt("Please enter your birth year:"));
    if (!isNaN(yourBirthYear)) {
        let currentYear = new Date().getFullYear();
        let yourAge = calculateAge(yourBirthYear, currentYear);
        console.log(`You are ${yourAge} years old.`)
        break;
    }
    else {
        console.log("Please enter a valid year!");
    }
}