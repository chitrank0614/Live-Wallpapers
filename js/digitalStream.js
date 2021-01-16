function initialize() {
	setInterval(function () {
		manageDate();
		manageTime();
		manageNumberStream();
	}, 150);
}

function manageTime() {
	let time = new Date();
	let UTCTime = '';

	if (time.getHours() < 10) UTCTime += '0';
	UTCTime += time.getHours() + ':';

	if (time.getMinutes() < 10) UTCTime += '0';
	UTCTime += time.getMinutes() + ':';

	if (time.getSeconds() < 10) UTCTime += '0';
	UTCTime += time.getSeconds();

	document.getElementById('time-block').innerHTML = UTCTime;
}

function manageDate() {
	let date = new Date();
	let UTCDate = '';
	switch (date.getUTCDay()) {
		case 0:
			UTCDate += 'SUN';
			break;
		case 1:
			UTCDate += 'MON';
			break;
		case 2:
			UTCDate += 'TUE';
			break;
		case 3:
			UTCDate += 'WED';
			break;
		case 4:
			UTCDate += 'THU';
			break;
		case 5:
			UTCDate += 'FRI';
			break;
		case 6:
			UTCDate += 'SAT';
			break;
	}
	UTCDate += ', ' + date.getUTCDay() + ' ';
	switch (date.getUTCMonth()) {
		case 0:
			UTCDate += 'JAN';
			break;
		case 1:
			UTCDate += 'FEB';
			break;
		case 2:
			UTCDate += 'MAR';
			break;
		case 3:
			UTCDate += 'APR';
			break;
		case 4:
			UTCDate += 'MAY';
			break;
		case 5:
			UTCDate += 'JUN';
			break;
		case 6:
			UTCDate += 'JUL';
			break;
		case 7:
			UTCDate += 'AUG';
			break;
		case 8:
			UTCDate += 'SEP';
			break;
		case 9:
			UTCDate += 'OCT';
			break;
		case 10:
			UTCDate += 'NOV';
			break;
		case 11:
			UTCDate += 'DEC';
			break;
	}
	UTCDate += ' ' + date.getFullYear();

	document.getElementById('date-block').innerHTML = UTCDate;
}

function manageNumberStream() {
	let numberOfUnits = self.innerWidth / 10 + 1;
	divText = '';
	for (let i = 0; i < numberOfUnits; i++) {
		num = Math.floor(Math.random() * 10);
		color = Math.floor(Math.random() * 10);
		divText += "<span class='unit-color-" + color + "'>" + num + '</span>';
	}
	document.getElementById('number-stream').innerHTML = divText;
}
