const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const categories = {
    Movies: [
        { word: "Inception", hint: "A Christopher Nolan movie about dreams within dreams." },
        { word: "Titanic", hint: "A tragic love story set on a sinking ship." },
        { word: "Avatar", hint: "A James Cameron movie about a blue alien species." },
        { word: "Gladiator", hint: "A movie about a Roman general seeking revenge." },
        { word: "Interstellar", hint: "A space exploration movie directed by Christopher Nolan." }
    ],
    TVShows: [
        { word: "Friends", hint: "A sitcom about six friends living in New York City." },
        { word: "Sherlock", hint: "A modern adaptation of Arthur Conan Doyle's famous detective." },
        { word: "TheOffice", hint: "A comedy series about a paper company." }
    ],
    Animals: [
        { word: "Elephant", hint: "A large gray animal with a trunk." },
        { word: "Kangaroo", hint: "A marsupial from Australia that hops." },
        { word: "Penguin", hint: "A flightless bird that lives in cold climates." },
        { word: "Dolphin", hint: "An intelligent marine mammal known for its playful nature." },
        { word: "Giraffe", hint: "The tallest animal, known for its long neck." }
    ],
    Foods: [
        { word: "Pizza", hint: "A popular Italian dish with cheese and toppings." },
        { word: "Burger", hint: "A sandwich consisting of a patty between two buns." },
        { word: "Sushi", hint: "A Japanese dish often made with rice and fish." },
        { word: "Pasta", hint: "An Italian dish made from noodles and sauce." },
        { word: "Taco", hint: "A Mexican dish with a folded tortilla and filling." }
    ],
    Books: [
        { word: "Hamlet", hint: "A tragedy by Shakespeare about the Prince of Denmark." },
        { word: "Dune", hint: "A science fiction novel set on the desert planet Arrakis." },
        { word: "It", hint: "A Stephen King novel about a shape-shifting clown." },
        { word: "Frankenstein", hint: "A novel about a scientist creating life, by Mary Shelley." }
    ],
    Countries: [
        { word: "Canada", hint: "A country known for maple syrup and polite people." },
        { word: "Japan", hint: "An island nation famous for sushi and cherry blossoms." },
        { word: "France", hint: "Home to the Eiffel Tower and known for its cuisine." },
        { word: "Brazil", hint: "The largest country in South America, known for Carnival." },
        { word: "Australia", hint: "A country with kangaroos and the Great Barrier Reef." }
    ],
    Technologies: [
        { word: "Internet", hint: "A global network connecting millions of devices." },
        { word: "Smartphone", hint: "A handheld device used for communication and apps." },
        { word: "Blockchain", hint: "A technology behind cryptocurrencies like Bitcoin." },
    ]
};

let selectedCategory;

$("#categorySelect").on("change", function () {
    selectedCategory = $(this).val();
    startNewGame(selectedCategory);
});

function startNewGame(category) {
    
    let randomWordObj = getRandomWordFromCategory(category);
    let word = randomWordObj.word.toUpperCase(); 
    let hint = randomWordObj.hint;

    let displayWord = new Array(word.length).fill("_"); 
    let remainingLetters = word.length;
    let wrongGuesses = 0;

    $("#hangman").attr("src", "assets/hangman-0.png");

    $("#resultMessage").empty();

    updateWordDisplay(displayWord);

    let $hintText = $("#hintText");
    let $hint = $("#hint");
    $hint.hide();
    $hintText.text("Show Hint");

    $("#hintButton").off("click").on("click", function () {
        if ($hint.is(":visible")) {
            $hintText.text("Show Hint");
            $hint.hide();
        } else {
            $hintText.text("Hide Hint");
            $hint.text(hint).show();
        }
    });

    const $keyboard = $("#keyboard");
    $keyboard.empty();
    for (let i = 0; i < alphabet.length; i++) {
        const $button = $("<button>")
            .addClass("letter-button")
            .attr("id", `btn-${alphabet[i]}`)
            .text(alphabet[i])
            .on("click", function () {
                const clickedLetter = $(this).text();

                if (word.includes(clickedLetter)) {
                    for (let i = 0; i < word.length; i++) {
                        if (word[i] === clickedLetter) {
                            displayWord[i] = clickedLetter;
                            remainingLetters--;
                        }
                    }

                    updateWordDisplay(displayWord);
                    $(this).addClass("correct-letter");

                    if (remainingLetters === 0) {
                        showGameOverMessage();
                    }
                } else {
                    wrongGuesses++;
                    $(this).prop("disabled", true);
                    $("#hangman").attr("src", `assets/hangman-${wrongGuesses}.png`);

                    if (wrongGuesses === 6) {
                        showGameOverMessage();
                    }
                }
            });

        $keyboard.append($button);
    }

    function showGameOverMessage() {
        if (remainingLetters === 0) {
            $("#resultMessage").text("Congratulations, you've guessed the word!").css("color", "green");
        } else {
            $("#resultMessage").text("Better luck next time!").css("color", "red");
        }
        $("#keyboard button").prop("disabled", true);
        $("#reset").show();
    }

    $("#reset").on("click", function () {
        location.reload();
    });
}

function getRandomWordFromCategory(category) {
    const categoryWords = categories[category];
    return categoryWords[Math.floor(Math.random() * categoryWords.length)];
}

function updateWordDisplay(displayWord) {
    $('#guessWord').empty(); 
    for (let i = 0; i < displayWord.length; i++) {
        let $letterElement = $("<li>").text(displayWord[i]);
        if (displayWord[i] !== "_") {
            $letterElement.addClass("guessed-letter");
        }
        $('#guessWord').append($letterElement);
    }
}
