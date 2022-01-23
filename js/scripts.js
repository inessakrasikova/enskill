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
    let navLinks = document.querySelectorAll(".dropdown-item");
    const menuToggle = document.getElementById("navigation");
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", function (e) {
        let theme = navLink.dataset.theme;

        /**
         * Подгрузка JSON из файла
         */
        fetch("json/words.json")
          .then((response) => {
            return response.json();
          })
          .then((words) => {
            if (words[theme] !== undefined && words[theme].length > 0) {
              inputMassive = words[theme][0]["ru"];
              outputMassive = words[theme][1]["en"];
              bsCollapse.toggle();

              document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
                dropdownToggle.classList.remove("show");
              });

              document.querySelectorAll(".dropdown-menu").forEach((dropdownMenu) => {
                dropdownMenu.classList.remove("show");
              });

              numberOfMistakes = 0;
              wordNumber = 0;
              showWord();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
}

function showWord() {
    document.getElementById("word").innerHTML = inputMassive[wordNumber];
}

function checkWord() {
    var translate = document.getElementById("translate").value.trim();

    if (translate.toUpperCase() === outputMassive[wordNumber].toUpperCase()) {
        document.getElementById("translate").value = "";
        document.getElementById("translate").placeholder = "Write your translation";
        numberOfMistakes = 0;
        wordNumber++;
    } else {
        document.getElementById("translate").value = "";
        numberOfMistakes++;
    }

    if (numberOfMistakes === 6) {
        document.getElementById("translate").placeholder = outputMassive[wordNumber];
        numberOfMistakes = 0;
    }

    if (wordNumber === outputMassive.length) {
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
