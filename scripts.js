var inputMassive ;
var outputMassive;

var numberOfMistakes = 0;
var wordNumber = 0;

function selectTheme (theme){

    var them = theme.split(',');

    console.log("them[0]: " + them[0]);
    var i = them[0];
    console.log("selectTheme: " + them);
    console.log("i: " + i);
    console.log("them: " + them[1]);


    /**
     * Подгрузка JSON из файла
     */
    fetch('./data.json').then(response => {
        return response.json();
    }).then(data => {
        console.log(data[1]['submenu'][0]['submenu'][0][them[1]][0]['ru']);
        console.log(data[1].name);
        // console.log(data);
        // TODO: Не подставляется var i = them[0]; на строку 28:58. Не разобрался. Как реализовать лучше?
        inputMassive = data[1]['submenu'][0]['submenu'][0][them[1]][0]['ru'];
        outputMassive = data[1]['submenu'][0]['submenu'][0][them[1]][0]['en'];
        // console.log(inputMassive);
        // console.log(outputMassive);

    }).catch(err => {
        // Do something for an error here
    });

// inputMassive = daysOfTheWeek[0];
// outputMassive = daysOfTheWeek[1];
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();
}

selectTheme()
showWord();

function showWord() {
    document.getElementById('word').innerHTML 
    = inputMassive[wordNumber];
}


function checkWord() {
    var translate = document.getElementById('translate').value;
    
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

    if (wordNumber == outputMassive.length){
      wordNumber = 0;
    }
    showWord();
}

var input = document.getElementById("translate");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkWord();
    }
});