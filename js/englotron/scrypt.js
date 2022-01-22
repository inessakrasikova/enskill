function getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function compareRandom(a, b) {
	return Math.random() - 0.5;
}

function inputStars(number) {
	var d = document;
	d.querySelector('.lives').innerHTML='';
	for (var i = 0; i < number; i++) {
		var star = d.createElement('div');
		star.setAttribute('class', 'star');		
		d.querySelector('.lives').appendChild(star);
	}
}

function getCorrectArr(arr) {
	var arr = arr.map(item => {
		if (item !== 'I') item = item.toLowerCase();
		return item;
	});
	arr = arr.sort();
	for (var q = 1, i = 1; q < arr.length; ++q) {
		if (arr[q] !== arr[q - 1]) {
			arr[i++] = arr[q];
		}
	}
	arr.length = i;
	return arr;
}

var newStep = function() {
	result.textContent = scores;	
	var num = getRandomInt(arrQwest.length); 
	qwestDiv.textContent = arrQwest[num];
	qwestDiv.setAttribute('data-ans', arrAns[num]);
	qwestAns.textContent = '';
	getAnsWords(arrAns[num]);
	inputStars(lives); 
}

var clickHandler = function(e) {
	var word = e.currentTarget.textContent;
	if (qwestAns.textContent) {
		qwestAns.textContent += ' ' + word;
	} else {
		word = word.charAt(0).toUpperCase() + word.substr(1, word.length);
		qwestAns.textContent = word;
	}
}

var clickStartHandler = function() {
	qwestDiv.classList.remove('non-visible');
	qwestAns.classList.remove('non-visible');
	info.classList.remove('non-visible');
	btn.classList.add('non-visible');
	lives = 5;
	scores = 0;
	result.textContent = '';
	newStep();
}

function showError(tryAns) {
	overlay.style.display = 'flex';
	modalAns.textContent = tryAns;
	errorEl.textContent = errorTitle[lives];
}

function closeModal() {
	overlay.style.display='none';
	if (lives === 0) {
		endGame();
	} else {
		newStep();	
	}	
}

function getAnsWords(answer) {
	var resArr = [];
	
	resArr.push(answer);
	for (var i = 0, newArr = []; i < 3; i++) {
		var num = getRandomInt(arrQwest.length);
		resArr.push(arrAns[num]);
	}
	
	var resWords = resArr.reduce((sum, current) => {
		return sum.concat(current.split(' '));
	}, []);
	
	resWords.sort(compareRandom);

	resWords = getCorrectArr(resWords);

	variants.innerHTML = '';
	resWords.forEach((current) => {
		var newDiv = document.createElement('div');
		newDiv.textContent = current;
		newDiv.setAttribute('class', 'variants__one');
		newDiv.addEventListener('click', clickHandler);
		variants.appendChild(newDiv);

	});
}

var clickHandlerAns = function() {
	if (qwestAns.textContent.toLowerCase() === qwestDiv.getAttribute('data-ans').toLowerCase()) {
		scores++;
		newStep();			
	} else {
		lives--;
		showError(qwestDiv.getAttribute('data-ans'));
	}
}

function getWordForm(n) {
	var nStr = n.toString();
	var lastNum = nStr.charAt(nStr.length - 1);
	if ((lastNum >=2 && lastNum <= 4) && (n != 12) &&  (n != 13) &&  (n != 14)) {
		return ' очка';
	} else if ((lastNum == 1) && (n != 11)) {
		return ' очко';
	} else {
		return ' очков';
	}
} 

function endGame() {
	qwestDiv.textContent = 'Ваш результат';
	qwestAns.textContent = scores + getWordForm(scores);
	variants.textContent = '';
	info.classList.toggle('non-visible');
	btn.classList.toggle('non-visible');
	btn.textContent = 'Ещё раз!'
}

var arrAns = [], 
	arrQwest = [];

window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'js/dataAns.json');
	xhr.send();
	var result = [];
	xhr.addEventListener('load', () => {
		var arr = JSON.parse(xhr.response);
		result = arr.reduce((res, item) => {
			for (prop in item) {
				res.push(item[prop]);
			};
			return res;	
				
		}, []);	
		arrAns = result;
	});

	var xhr2 = new XMLHttpRequest();
	xhr2.open('GET', 'js/dataQwest.json');
	xhr2.send();
	var result = [];
	xhr2.addEventListener('load', () => {
		var arr = JSON.parse(xhr2.response);
		result = arr.reduce((res, item) => {
			for (prop in item) {
				res.push(item[prop]);
			};
			return res;	
		}, []);	
		arrQwest = result;		
	});	
}

var qwestDiv = document.querySelector('.question');
var qwestAns = document.querySelector('.answer');
var variants = document.querySelector('.variants');
var result = document.querySelector('.result');
var btn = document.querySelector('.btn');
var info = document.querySelector('.info-wrap');
var overlay = document.querySelector('.overlay');
var modalClose = document.querySelector('.modal-close');
var modalAns = document.getElementById('modal-ans');
var errorEl = document.getElementById('error-title');
var errorTitle = ['Это фиаско, братан!', 'Осталась одна попытка!', 
	'Увы, нет.', 'Опять неправильно!','Ошибка!'];

var scores;
var lives;

modalClose.addEventListener('click', closeModal);

btn.addEventListener('click', clickStartHandler);

qwestAns.addEventListener('click', clickHandlerAns);
