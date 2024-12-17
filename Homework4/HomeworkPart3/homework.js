function createSentenceFromArray(wordsArray) {
    let sentence = '';
    if (wordsArray.length > 0 && wordsArray[0] != "") {
        for (let i = 0; i < wordsArray.length; i++) {
            if (i == wordsArray.length - 1 || i == 0) {
                sentence += wordsArray[i];
            }
            else {
                sentence += ` ${wordsArray[i]}`;
            }
        }
        return sentence;
    }
    else {
        return "You did not enter any word."
    }
}
function enterWords() {
    let wordsArray = [];
    while (true) {
        let word = prompt("Enter word:");
        wordsArray.push(word);
        if (word.match(/[^\w\s]/g) || word === "") {
            //I'm using regular expression to check if the user entered a punctiation mark
            break;
        }
    }
    return wordsArray;
}

let wordsArray = enterWords();
console.log("Words entered:", wordsArray);
console.log("Constructed sentence:", createSentenceFromArray(wordsArray))