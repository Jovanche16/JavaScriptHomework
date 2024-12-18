let animalName = prompt("Enter name of the animal: ");
let animalKind = prompt("Enter kind of the animal: ");
let sentence = prompt("Enter sentence you would like the animal to say: ");

let animal = {
    name: animalName,
    kind: animalKind,
    speak: function (sentence) {
        console.log(this.kind + " says: " + sentence);
    }

};

animal.speak(sentence);