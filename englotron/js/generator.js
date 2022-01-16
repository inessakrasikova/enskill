
// Функция генерирует объекты для подготовки файлов данных (русские фразы)

function generateQwest(rusword = 'любить', rusword2 = 'люблю', rusword3 = 'любишь',
	rusword4 = 'любим', rusword5 = 'любят',  rusword6 = 'любит',
	rusword7 = 'любил', rusword8 = 'любили',  rusword9 = 'любила',) {
	var res ='{\n ';
	res += '\"futQ1\": \"Я буду ' + rusword + '?\",\n';
	res += '\"futQ2\": \"Ты будешь ' + rusword + '?\",\n';
	res += '\"futQ3\": \"Мы будем ' + rusword + '?\",\n';
	res += '\"futQ4\": \"Они будут ' + rusword + '?\",\n';
	res += '\"futQ5\": \"Он будет ' + rusword + '?\",\n';
	res += '\"futQ6\": \"Она будет ' + rusword + '?\",\n\n';

	res += '\"futS1\": \"Я буду ' + rusword + '\",\n';
	res += '\"futS2\": \"Ты будешь ' + rusword + '\",\n';
	res += '\"futS3\": \"Мы будем ' + rusword + '\",\n';
	res += '\"futS4\": \"Они будут ' + rusword + '\",\n';
	res += '\"futS5\": \"Он будет ' + rusword + '\",\n';
	res += '\"futS6\": \"Она будет ' + rusword + '\",\n\n';

	res += '\"futN1\": \"Я не буду ' + rusword + '\",\n';
	res += '\"futN2\": \"Ты не будешь ' + rusword + '\",\n';
	res += '\"futN3\": \"Мы не будем ' + rusword + '\",\n';
	res += '\"futN4\": \"Они не будут ' + rusword + '\",\n';
	res += '\"futN5\": \"Он не будет ' + rusword + '\",\n';
	res += '\"futN6\": \"Она не будет ' + rusword + '\",\n\n';

	res += '\"presQ1\": \"Я ' + rusword2 + '?\",\n';
	res += '\"presQ2\": \"Ты ' + rusword3 + '?\",\n';
	res += '\"presQ3\": \"Мы ' + rusword4 + '?\",\n';
	res += '\"presQ4\": \"Они ' + rusword5 + '?\",\n';
	res += '\"presQ5\": \"Он ' + rusword6 + '?\",\n';
	res += '\"presQ6\": \"Она ' + rusword6 + '?\",\n\n';

	res += '\"presS1\": \"Я ' + rusword2 + '\",\n';
	res += '\"presS2\": \"Ты ' + rusword3 + '\",\n';
	res += '\"presS3\": \"Мы ' + rusword4 + '\",\n';
	res += '\"presS4\": \"Они ' + rusword5 + '\",\n';
	res += '\"presS5\": \"Он ' + rusword6 + '\",\n';
	res += '\"presS6\": \"Она ' + rusword6 + '\",\n\n';

	res += '\"presN1\": \"Я не ' + rusword2 + '\",\n';
	res += '\"presN2\": \"Ты не ' + rusword3 + '\",\n';
	res += '\"presN3\": \"Мы не ' + rusword4 + '\",\n';
	res += '\"presN4\": \"Они не ' + rusword5 + '\",\n';
	res += '\"presN5\": \"Он не ' + rusword6 + '\",\n';
	res += '\"presN6\": \"Она не ' + rusword6 + '\",\n\n';

	res += '\"pastQ1\": \"Я ' + rusword7 + '?\",\n';
	res += '\"pastQ2\": \"Ты ' + rusword7 + '?\",\n';
	res += '\"pastQ3\": \"Мы ' + rusword8 + '?\",\n';
	res += '\"pastQ4\": \"Они ' + rusword8 + '?\",\n';
	res += '\"pastQ5\": \"Он ' + rusword7 + '?\",\n';
	res += '\"pastQ6\": \"Она ' + rusword9 + '?\",\n\n';

	res += '\"pastS1\": \"Я ' + rusword7 + '\",\n';
	res += '\"pastS2\": \"Ты ' + rusword7 + '\",\n';
	res += '\"pastS3\": \"Мы ' + rusword8 + '\",\n';
	res += '\"pastS4\": \"Они ' + rusword8 + '\",\n';
	res += '\"pastS5\": \"Он ' + rusword7 + '\",\n';
	res += '\"pastS6\": \"Она ' + rusword9 + '\",\n\n';

	res += '\"pastN1\": \"Я не ' + rusword7 + '\",\n';
	res += '\"pastN2\": \"Ты не ' + rusword7 + '\",\n';
	res += '\"pastN3\": \"Мы не ' + rusword8 + '\",\n';
	res += '\"pastN4\": \"Они не ' + rusword8 + '\",\n';
	res += '\"pastN5\": \"Он не ' + rusword7 + '\",\n';
	res += '\"pastN6\": \"Она не ' + rusword9 + '\"\n';
	res += '}';

	return res;
}

function generateAns(engword, engword2, engword3) {
	var res ='{\n';
	res += '\"futQ1\": \"Will I ' + engword + '?\",\n';
	res += '\"futQ2\": \"Will you ' + engword + '?\",\n';
	res += '\"futQ3\": \"Will we ' + engword + '?\",\n';
	res += '\"futQ4\": \"Will they ' + engword + '?\",\n';
	res += '\"futQ5\": \"Will he ' + engword + '?\",\n';
	res += '\"futQ6\": \"Will she ' + engword + '?\",\n\n';

	res += '\"futS1\": \"I will ' + engword + '\",\n';
	res += '\"futS2\": \"You will ' + engword + '\",\n';
	res += '\"futS3\": \"We will ' + engword + '\",\n';
	res += '\"futS4\": \"They will ' + engword + '\",\n';
	res += '\"futS5\": \"He will ' + engword + '\",\n';
	res += '\"futS6\": \"She will ' + engword + '\",\n\n';

	res += '\"futN1\": \"I will not ' + engword + '\",\n';
	res += '\"futN2\": \"You will not ' + engword + '\",\n';
	res += '\"futN3\": \"We will not ' + engword + '\",\n';
	res += '\"futN4\": \"They will not ' + engword + '\",\n';
	res += '\"futN5\": \"He will not ' + engword + '\",\n';
	res += '\"futN6\": \"She will not ' + engword + '\",\n\n';

	res += '\"presQ1\": \"Do I ' + engword + '?\",\n';
	res += '\"presQ2\": \"Do you ' + engword + '?\",\n';
	res += '\"presQ3\": \"Do we ' + engword + '?\",\n';
	res += '\"presQ4\": \"Do they ' + engword + '?\",\n';
	res += '\"presQ5\": \"Does he ' + engword + '?\",\n';
	res += '\"presQ6\": \"Does she ' + engword + '?\",\n\n';

	res += '\"presS1\": \"I ' + engword + '\",\n';
	res += '\"presS2\": \"You ' + engword + '\",\n';
	res += '\"presS3\": \"We ' + engword + '\",\n';
	res += '\"presS4\": \"They ' + engword + '\",\n';
	res += '\"presS5\": \"He ' + engword3 + '\",\n';
	res += '\"presS6\": \"She ' + engword3 + '\",\n\n';	

	res += '\"presN1\": \"I don\'t ' + engword + '\",\n';
	res += '\"presN2\": \"You don\'t ' + engword + '\",\n';
	res += '\"presN3\": \"We don\'t ' + engword + '\",\n';
	res += '\"presN4\": \"They don\'t ' + engword + '\",\n';
	res += '\"presN5\": \"He doesn\'t ' + engword + '\",\n';
	res += '\"presN6\": \"She doesn\'t ' + engword + '\",\n\n';

	res += '\"pastQ1\": \"Did I ' + engword + '?\",\n';
	res += '\"pastQ2\": \"Did you ' + engword + '?\",\n';
	res += '\"pastQ3\": \"Did we ' + engword + '?\",\n';
	res += '\"pastQ4\": \"Did they ' + engword + '?\",\n';
	res += '\"pastQ5\": \"Did he ' + engword + '?\",\n';
	res += '\"pastQ6\": \"Did she ' + engword + '?\",\n\n';	

	res += '\"pastS1\": \"I ' + engword2 + '\",\n';
	res += '\"pastS2\": \"You ' + engword2 + '\",\n';
	res += '\"pastS3\": \"We ' + engword2 + '\",\n';
	res += '\"pastS4\": \"They ' + engword2 + '\",\n';
	res += '\"pastS5\": \"He ' + engword2 + '\",\n';
	res += '\"pastS6\": \"She ' + engword2 + '\",\n\n';	

	res += '\"pastN1\": \"I didn\'t ' + engword + '\",\n';
	res += '\"pastN2\": \"You didn\'t ' + engword + '\",\n';
	res += '\"pastN3\": \"We didn\'t ' + engword + '\",\n';
	res += '\"pastN4\": \"They didn\'t ' + engword + '\",\n';
	res += '\"pastN5\": \"He didn\'t ' + engword + '\",\n';
	res += '\"pastN6\": \"She didn\'t ' + engword + '\"\n';				

	res += '}';
	return res;
}

//console.log(generateQwest ('любить', 'люблю',  'любишь', 'любим', 'любят', 'любит', 'любил', 'любили', 'любила'));
//

/*console.log(generateQwest ('советовать', 'советую',  'советуешь', 'советуем',	'советуют', 'советует', 'советовал', 'советовали', 'советовала'));
console.log(generateQwest ('отвечать', 'отвечаю',  'отвечаешь', 'отвечаем',	'отвечают', 'отвечает', 'отвечал', 'отвечали', 'отвечала'));
console.log(generateQwest ('спрашивать', 'спрашиваю',  'спрашиваешь', 'спрашиваем', 'спрашивают', 'спрашивает', 'спрашивал', 'спрашивали', 'спрашивала'));
console.log(generateQwest ('верить', 'верю',  'веришь', 'верим', 'верят',  'верит', 'верил', 'верили', 'верила'));
console.log(generateQwest ('звонить', 'звоню', 'звонишь', 'звоним', 'звонят', 'звонит', 'звонил', 'звонили', 'звонила'));

console.log(generateAns('answer', 'answered', 'answeres'));
console.log(generateAns('ask', 'asked', 'askes'));
console.log(generateAns('belive', 'belived', 'belives'));
console.log(generateAns('call', 'called', 'calles'));

console.log(generateAns('change', 'changed', 'changes'));
console.log(generateAns('close', 'closed', 'closes'));
console.log(generateAns('copy', 'copied', 'copies'));
console.log(generateAns('excuse', 'excused', 'excuses'));
console.log(generateAns('finish', 'finished', 'finishes')); 


console.log(generateQwest ('менять', 'меняю', 'меняешь', 'меняем', 'меняют', 'меняет', 'менял', 'меняли', 'меняла'));
console.log(generateQwest ('закрывать', 'закрываю', 'закрываешь', 'закрываем', 'закрывают', 'закрывает', 'закрывал', 'закрывали', 'закрывала'));
console.log(generateQwest ('копировать', 'копирую', 'копируешь', 'копируем', 'копируют', 'копирует', 'копировал', 'копировали', 'копировала'));
console.log(generateQwest ('извинять', 'извиняю', 'извиняешь', 'извиняем', 'извиняют', 'извиняет', 'извинял', 'извиняли', 'извиняла'));
console.log(generateQwest ('заканчивать', 'заканчиваю', 'заканчиваешь', 'заканчиваем', 
	'заканчивают', 'заканчивает', 'заканчивал', 'заканчивали', 'заканчивала'));

console.log(generateAns('follow', 'followed', 'followes'));
console.log(generateAns('happen', 'happened', 'happenes'));
console.log(generateAns('help', 'helped', 'helpes'));
console.log(generateAns('hope', 'hoped', 'hopes'));
console.log(generateAns('like', 'liked', 'likes')); 

console.log(generateQwest ('следовать', 'следую', 'следуешь', 'следуем', 'следуют', 'следует', 'следовал', 'следовали', 'следовала'));
console.log(generateQwest ('бывать', 'бываю', 'бываешь', 'бываем', 'бывают', 'бывает', 'бывал', 'бывали', 'бывала'));
console.log(generateQwest ('помогать', 'помогаю', 'помогаешь', 'помогаем', 'помогают', 'помогает', 'помогал', 'помогали', 'помогала'));
console.log(generateQwest ('надеяться', 'надеюсь', 'надеешься', 'надеемся', 'надеются', 'надеется', 'надеялся', 'надеялись', 'надеялась'));
console.log(generateQwest ('нравится', 'нравится', 'нравится', 'нравится', 'нравится', 'нравится', 'нравится', 'нравится', 'нравится'));

console.log(generateAns('listen', 'listened', 'listenes'));
console.log(generateAns('live', 'lived', 'lives'));
console.log(generateAns('look', 'looked', 'lookes'));
console.log(generateAns('love', 'loved', 'loves'));

console.log(generateQwest ('слушать', 'слушаю', 'слушаешь', 'слушаем', 'слушают', 'слушает', 'слушал', 'слушали', 'слушала'));
console.log(generateQwest ('жить', 'живу', 'живёшь', 'живём', 'живут', 'живёт', 'жил', 'жили', 'жила'));
console.log(generateQwest ('смотреть', 'смотрю', 'смотришь', 'смотрим', 'смотрят', 'смотрит', 'смотрел', 'смотрели', 'смотрела'));
console.log(generateQwest ('любить', 'люблю', 'любишь', 'любим', 'любят', 'любит', 'любил', 'любили', 'любила'));

console.log(generateAns('move', 'moved', 'moves'));
console.log(generateAns('need', 'needed', 'needes'));
console.log(generateAns('open', 'opened', 'openes'));
console.log(generateAns('order', 'ordered', 'orderes'));
console.log(generateAns('play', 'played', 'plays'));

console.log(generateQwest ('двигать', 'двигаю', 'двигаешь', 'двигаем', 'двигают', 'двигает', 'двигал', 'двигали', 'двигала'));
console.log(generateQwest ('нуждаться', 'нуждаюсь', 'нуждаешься', 'нуждаемся', 'нуждаются', 'нуждается', 'нуждался', 'нуждались', 'нуждалась'));
console.log(generateQwest ('открывать', 'открываю', 'открываешь', 'открываем', 'открывают', 'открывает', 'открывал', 'открывали', 'открывала'));
console.log(generateQwest ('заказывать', 'заказываю', 'заказываешь', 'заказываем', 'заказывают',
	 'заказывает', 'заказывал', 'заказывали', 'закаывала'));
console.log(generateQwest ('играть', 'играю', 'играешь', 'играем', 'играют', 'играет', 'играл', 'играли', 'играла'));

console.log(generateAns('remember', 'remembered', 'rememberes'));
console.log(generateAns('start', 'started', 'startes'));
console.log(generateAns('stay', 'stayed', 'stays'));
console.log(generateAns('stop', 'stoped', 'stopes'));
console.log(generateAns('study', 'studed', 'studies'));

console.log(generateQwest ('помнить', 'помню', 'помнишь', 'помним', 'помнят', 'помнит', 'помнил', 'помнили', 'помнила'));
console.log(generateQwest ('начинать', 'начинаю', 'начинаешь', 'начинаем', 'начинают', 'начинает', 'начал', 'начали', 'начала'));
console.log(generateQwest ('отстановиться', 'останавливаюсь', 'останавливаешься', 'останавливаемся', 
	'останавливаются', 'останавливается', 'остановился', 'остановились', 'остановилась'));
console.log(generateQwest ('останавливать', 'останавливаю', 'останавливаешь', 'останавливаем', 
	'останавливают', 'останавливает', 'остановил', 'остановили', 'остановила'));
console.log(generateQwest ('изучать', 'изучаю', 'изучаешь', 'изучаем', 'изучают', 'изучает', 'изучал', 'изучали', 'изучала'));

console.log(generateAns('thank', 'thanked', 'thankes'));
console.log(generateAns('travel', 'traveled', 'traveles'));
console.log(generateAns('try', 'tryed', 'trys'));
console.log(generateAns('use', 'used', 'uses'));
console.log(generateAns('wait', 'waited', 'waites'));

console.log(generateQwest ('благодарить', 'благодарю', 'благодаришь', 'благодарим', 'благодарят', 
	'благодарит', 'благодарил', 'благодарили', 'благодарила'));
console.log(generateQwest ('путешествовать', 'путешествую', 'путешествуешь', 'петешествуем', 'путешествуют', 
	'путешествует', 'путешествовал', 'путешествовали', 'путешествовала'));
console.log(generateQwest ('пытаться', 'пытаюсь', 'пытаешься', 'пытаемся', 'пытаются', 'пытается', 'пытался', 'пытались', 'пыталась'));
console.log(generateQwest ('использовать', 'использую', 'используешь', 'используем', 'используют', 
	'использует', 'использовал', 'использовали', 'использовала'));
console.log(generateQwest ('ждать', 'жду', 'ждёшь', 'ждём', 'ждут', 'ждёт', 'ждал', 'ждали', 'ждала'));

console.log(generateAns('walk', 'walked', 'walkes'));
console.log(generateAns('want', 'wanted', 'wantes'));
console.log(generateAns('work', 'worked', 'workes'));
console.log(generateAns('worry', 'worried', 'worries'));

console.log(generateQwest ('ходить', 'хожу', 'ходишь', 'ходим', 'ходят', 'ходит', 'ходил', 'ходили', 'ходила'));
console.log(generateQwest ('хотеть', 'хочу', 'хочешь', 'хотим', 'хотят', 'хочет', 'хотел', 'хотели', 'хотела'));
console.log(generateQwest ('работать', 'работаю', 'работаешь', 'работаем', 'работают', 'работает', 'работал', 'работали', 'работала'));
console.log(generateQwest ('беспокоиться', 'беспокоюсь', 'беспокоишься', 'беспокоимся', 'беспокоятся', 
	'беспокоится', 'беспокоился', 'беспокоились', 'беспокоилась'));

console.log(generateAns('become', 'became', 'becomes'));
console.log(generateAns('begin', 'began', 'begines'));
console.log(generateAns('buy', 'bought', 'buys'));
console.log(generateAns('choose', 'chosen', 'chooses'));

console.log(generateQwest ('становиться', 'становлюсь', 'становишься', 'становимся', 'становятся', 
	'становится', 'становился', 'становились', 'становилась'));
console.log(generateQwest ('начинать', 'начинаю', 'начинаешь', 'начинаем', 'начинают', 'начинает', 'начинал', 'начинали', 'начинала'));
console.log(generateQwest ('покупать', 'покупаю', 'покупаешь', 'покупаем', 'покупают', 'покупает', 'купил', 'купили', 'купила'));
console.log(generateQwest ('выбирать', 'выбираю', 'выбираешь', 'выбираем', 'выбирают', 'выбирает', 'выбирал', 'выбирали', 'выбирала'));

console.log(generateAns('come', 'came', 'comes'));
console.log(generateAns('cost', 'cost', 'costes'));
console.log(generateAns('drink', 'drank', 'drinkes'));
console.log(generateAns('eat', 'ate', 'eates'));
console.log(generateAns('feel', 'felt', 'feeles'));

console.log(generateQwest ('приходить', 'прихожу', 'приходишь', 'приходим', 'приходят', 'приходит', 'приходил', 'приходили', 'приходила'));	
console.log(generateQwest ('стоить', 'ст`ою', 'ст`оишь', 'ст`оим', 'ст`оят', 'ст`оит', 'стоил', 'ст`оили', 'ст`оила'));	
console.log(generateQwest ('пить', 'пью', 'пьёшь', 'пьём', 'пьют', 'пьёт', 'пил', 'пили', 'пила'));	
console.log(generateQwest ('есть', 'ем', 'ешь', 'едим', 'едят', 'ест', 'ел', 'ели', 'ела'));	
console.log(generateQwest ('чувствовать', 'чувствую', 'чувствуешь', 'чувствуем', 'чувствуют', 'чувствует', 'чувствовал', 'чувствовали', 'чувствовала'));

console.log(generateAns('fly', 'flew', 'flies'));
console.log(generateAns('get', 'get', 'gates'));
console.log(generateAns('give', 'gave', 'gives'));
console.log(generateAns('go', 'went', 'goes'));
console.log(generateAns('have', 'had', 'haves'));
console.log(generateAns('know', 'knew', 'knowes'));
console.log(generateAns('let', 'let', 'letes'));

console.log(generateQwest ('летать', 'летаю', 'летаешь', 'летаем', 'летают', 'летает', 'летал', 'летали', 'летала'));	
console.log(generateQwest ('получать', 'получаю', 'получаешь', 'получаем', 'получают', 'получает', 'получал', 'получали', 'получала'));	
console.log(generateQwest ('давать', 'даю', 'даёшь', 'даём', 'дают', 'даёт', 'давал', 'давали', 'давала'));
console.log(generateQwest ('идти', 'иду', 'идёшь', 'идём', 'идут', 'идёт', 'шёл', 'шли', 'шла'));		
console.log(generateQwest ('иметь', 'имею', 'имеешь', 'имеем', 'имеют', 'имеет', 'имел', 'имели', 'имела'));	
console.log(generateQwest ('знать', 'знаю', 'знаешь', 'знаем', 'знают', 'знает', 'знал', 'знали', 'знала'));	
console.log(generateQwest ('позволять', 'позволяю', 'позволяешь', 'позволяем', 'позволяют', 'позволяет', 'позволял', 'позволяли', 'позволяла'));

console.log(generateAns('lose', 'lost', 'loses'));
console.log(generateAns('make', 'made', 'makes'));
console.log(generateAns('meet', 'met', 'meetes'));
console.log(generateAns('pay', 'paid', 'pays'));
console.log(generateAns('read', 'read', 'reades'));

console.log(generateQwest ('терять', 'теряю', 'теряешь', 'теряем', 'теряют', 'теряет', 'потерял', 'потеряли', 'потеряла'));	
console.log(generateQwest ('делать', 'делаю', 'делаешь', 'делаем', 'делают', 'делает', 'делал', 'делали', 'делала'));	
console.log(generateQwest ('встречать', 'встречаю', 'встречаешь', 'встречаем', 'встречают', 'встречает', 'встречал', 'встречали', 'встречала'));
console.log(generateQwest ('платить', 'плачу', 'платишь', 'платим', 'платят', 'платит', 'заплатил', 'заплатили', 'заплатила'));	
console.log(generateQwest ('читать', 'читаю', 'читаешь', 'читаем', 'читают', 'читает', 'прочитал', 'прочитали', 'прочитала'));	

console.log(generateAns('run', 'ran', 'runs'));
console.log(generateAns('say', 'said', 'says'));
console.log(generateAns('see', 'saw', 'sees'));
console.log(generateAns('sell', 'sold', 'sells'));
console.log(generateAns('sit', 'sat', 'sits'));

console.log(generateQwest ('бежать', 'бегу', 'бежишь', 'бежим', 'бегут', 'бежит', 'бежал', 'бежали', 'бежала'));
console.log(generateQwest ('говорить', 'говорю', 'говоришь', 'говорим', 'говорят', 'говорит', 'говорил', 'говорили', 'говорила'));		
console.log(generateQwest ('ведеть', 'вижу', 'видишь', 'видим', 'видят', 'видит', 'видел', 'видели', 'видела'));
console.log(generateQwest ('продавать', 'продаю', 'продаёшь', 'продаём', 'продают', 
	'продаёт', 'продавал', 'продавали', 'продавала'));
console.log(generateQwest ('сидеть', 'сижу', 'сидишь', 'сидим', 'сидят', 'сидит', 'сидел', 'сидели', 'сидела'));

console.log(generateAns('sleep', 'slept', 'sleeps'));
console.log(generateAns('speak', 'spoke', 'speaks'));
console.log(generateAns('stand', 'stood', 'stands'));
console.log(generateAns('take', 'took', 'takes'));
console.log(generateAns('teach', 'taught', 'teaches'));

console.log(generateQwest ('спать', 'сплю', 'спишь', 'спим', 'спят', 'спит', 'спал', 'спали', 'спала'));
console.log(generateQwest ('говорить', 'говорю', 'говоришь', 'говорим', 'говорят', 'говорит', 'говорил', 'говорили', 'говорила'));
console.log(generateQwest ('стоять', 'стоЮ', 'стоИшь', 'стоИм', 'стоЯт', 'стоИт', 'стоял', 'стояли', 'стояла'));
console.log(generateQwest ('брать', 'беру', 'берёшь', 'берём', 'берут', 'берёт', 'брал', 'брали', 'брала'));
console.log(generateQwest ('учить', 'учу', 'учишь', 'учим', 'учат', 'учит', 'учил', 'учили', 'учила'));

console.log(generateAns('tell', 'told', 'tells'));	
console.log(generateAns('think', 'thought', 'thinks'));
console.log(generateAns('write', 'wrote', 'writes'));

console.log(generateQwest ('рассказывать', 'рассказываю', 'рассказываешь', 'рассказываем', 'рассказывают', 
	'рассказывает', 'рассказывал', 'рассказывали', 'рассказывала'));
console.log(generateQwest ('думать', 'думаю', 'думаешь', 'думаем', 'думают', 'думает', 'думал', 'думали', 'думала'));
console.log(generateQwest ('писать', 'пишу', 'пишешь', 'пишем', 'пишут', 'пишет', 'писал', 'писали', 'писала'));*/
