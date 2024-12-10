function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let yourAge = currentYear - birthYear;
    console.log(`You are ${yourAge} years old.`)
    return yourAge;
}

while (true) {
    let yourBirthYear = parseInt(prompt("Please enter your birth year:"));

    if (!isNaN(yourBirthYear) && yourBirthYear < new Date().getFullYear()) {
        calculateAge(yourBirthYear);
        break;
    }
    else {
        console.log("Please enter a valid year!");
    }
}