/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var inputMassive;
var outputMassive;

var numberOfMistakes = 0;
var wordNumber = 0;

function selectTheme() {
    var navLinks = document.querySelectorAll(".dropdown-item");

    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", function (e) {
            var theme = navLink.dataset.theme;

            /**
             * Подгрузка JSON из файла
             */
            fetch("./json/words.json")
                .then((response) => {
                    return response.json();
                })
                .then((words) => {
                    if (words[theme] !== undefined && words[theme].length > 0) {
                        console.log(`words[${theme}]: `, words[theme]);
                        inputMassive = words[theme][0]["ru"];
                        outputMassive = words[theme][1]["en"];

                        console.log("inputMassive: ", inputMassive);
                        console.log("outputMassive: ", outputMassive);
                    } else {
                        console.log(`words[${theme}] не существует`);
                    }
                })
                .then(() => {
                    numberOfMistakes = 0;
                    wordNumber = 0;
                    showWord();
                })
                .catch((err) => {
                    // Do something for an error here
                    console.log(err);
                });
        });
    });
}

function showWord() {
    document.getElementById("word").innerHTML = inputMassive[wordNumber];
}

function checkWord() {
    var translate = document.getElementById("translate").value;

    if (translate == outputMassive[wordNumber]) {
        document.getElementById("translate").value = "";
        document.getElementById("translate").placeholder = "Write your translation";
        numberOfMistakes = 0;
        wordNumber++;
    } else {
        document.getElementById("translate").value = "";
        numberOfMistakes++;
    }

    if (numberOfMistakes == 3) {
        document.getElementById("translate").placeholder = outputMassive[wordNumber];
        numberOfMistakes = 0;
    }

    if (wordNumber == outputMassive.length) {
        wordNumber = 0;
    }
    showWord();
}

var input = document.getElementById("translate");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkWord();
    }
});
