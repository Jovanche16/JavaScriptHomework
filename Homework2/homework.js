let birthYear = prompt("Enter your birth year:");

if (isNaN(birthYear)) {
  console.log("You have entered an invalid year. Please try again.");
} else {
  let cycleYear = (birthYear - 4) % 12;
  let chineseSign = undefined;

  switch (cycleYear) {
    case 0:
      chineseSign = "Rat";
      break;

    case 1:
      chineseSign = "Ox";
      break;

    case 2:
      chineseSign = "Tiger";
      break;

    case 3:
      chineseSign = "Rabbit";
      break;

    case 4:
      chineseSign = "Dragon";
      break;

    case 5:
      chineseSign = "Snake";
      break;

    case 6:
      chineseSign = "Horse";
      break;

    case 7:
      chineseSign = "Goat";
      break;

    case 8:
      chineseSign = "Monkey";
      break;

    case 9:
      chineseSign = "Rooster";
      break;

    case 10:
      chineseSign = "Dog";
      break;

    case 11:
      chineseSign = "Pig";
      break;
  }

  if (chineseSign) {
    console.log("Your chinese sign is " + chineseSign);
  }
}
