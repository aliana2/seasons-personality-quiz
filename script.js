/*Add your JavaScript here*/

var winterScore = 0;
var springScore = 0;
var summerScore = 0;
var autumnScore = 0;
var answered = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", summer);
q1a3.addEventListener("click", autumn);
q1a4.addEventListener("click", spring);
q1a1.addEventListener("click", closeQuestion1);
q1a2.addEventListener("click", closeQuestion1);
q1a3.addEventListener("click", closeQuestion1);
q1a4.addEventListener("click", closeQuestion1);

q2a1.addEventListener("click", spring);
q2a2.addEventListener("click", summer);
q2a3.addEventListener("click", autumn);
q2a4.addEventListener("click", winter);
q2a1.addEventListener("click", closeQuestion2);
q2a2.addEventListener("click", closeQuestion2);
q2a3.addEventListener("click", closeQuestion2);
q2a4.addEventListener("click", closeQuestion2);

q3a1.addEventListener("click", spring);
q3a2.addEventListener("click", winter);
q3a3.addEventListener("click", summer);
q3a4.addEventListener("click", autumn);
q3a1.addEventListener("click", closeQuestion3);
q3a2.addEventListener("click", closeQuestion3);
q3a3.addEventListener("click", closeQuestion3);
q3a4.addEventListener("click", closeQuestion3);

q4a1.addEventListener("click", winter);
q4a2.addEventListener("click", spring);
q4a3.addEventListener("click", autumn);
q4a4.addEventListener("click", summer);
q4a1.addEventListener("click", closeQuestion4);
q4a2.addEventListener("click", closeQuestion4);
q4a3.addEventListener("click", closeQuestion4);
q4a4.addEventListener("click", closeQuestion4);

q5a1.addEventListener("click", spring);
q5a2.addEventListener("click", winter);
q5a3.addEventListener("click", summer);
q5a4.addEventListener("click", autumn);
q5a1.addEventListener("click", closeQuestion5);
q5a2.addEventListener("click", closeQuestion5);
q5a3.addEventListener("click", closeQuestion5);
q5a4.addEventListener("click", closeQuestion5);

restart.addEventListener("click", restarter)


function winter() {
	winterScore++;
	answered++;
	console.log("winter: " + winterScore + " ; answered: " + answered)
	doneCheck();
}

function spring() {
	springScore++;
	answered++;
	console.log("spring: " + springScore + " ; answered: " + answered)
	doneCheck();
}

function summer() {
	summerScore++;
	answered++;
	console.log("summer: " + summerScore + " ; answered: " + answered)
	doneCheck();
}

function autumn() {
	autumnScore++;
	answered++;
	console.log("autumn: " + autumnScore + " ; answered: " + answered)
	doneCheck();
}

function closeQuestion1() {
	q1a1.disabled = true;
	q1a2.disabled = true;
	q1a3.disabled = true;
	q1a4.disabled = true;
}
function closeQuestion2() {
	q2a1.disabled = true;
	q2a2.disabled = true;
	q2a3.disabled = true;
	q2a4.disabled = true;
}
function closeQuestion3() {
	q3a1.disabled = true;
	q3a2.disabled = true;
	q3a3.disabled = true;
	q3a4.disabled = true;
}
function closeQuestion4() {
	q4a1.disabled = true;
	q4a2.disabled = true;
	q4a3.disabled = true;
	q4a4.disabled = true;
}
function closeQuestion5() {
	q5a1.disabled = true;
	q5a2.disabled = true;
	q5a3.disabled = true;
	q5a4.disabled = true;
}

function doneCheck() {
	if (answered == 5) {
		console.log("quiz is complete!")
		updateResult();
	}
}

function updateResult() {
	if (winterScore > springScore && winterScore > summerScore && winterScore > autumnScore) { // winter
		console.log("result: winter")
		result.innerHTML = "your result: you're a winter person!"
		document.body.style.backgroundColor = "#dce6fa"
	} else if (springScore > winterScore && springScore > summerScore && springScore > autumnScore) { // spring
		console.log("result: spring")
		result.innerHTML = "your result: you're a spring person!"
		document.body.style.backgroundColor = "#cdf5cc"
	} else if (summerScore > springScore && summerScore > winterScore && summerScore > autumnScore) { // summer
		console.log("result: summer")
		result.innerHTML = "your result: you're a summer person!"
		document.body.style.backgroundColor = "#f0c8b7"
	} else if (autumnScore > springScore && autumnScore > winterScore && autumnScore > summerScore) { // autumn
		console.log("result: autumn")
		result.innerHTML = "your result: you're a autumn person!"
		document.body.style.backgroundColor = "#d2c5bc"
	} else {
		console.log("result: tie")
		var tie1 = "none"
		var tie2 = "none"
		if (winterScore == 2) if (tie1 == "none") tie1 = "winter"; else tie2 = "winter";
		if (springScore == 2) if (tie1 == "none") tie1 = "spring"; else tie2 = "spring"
		if (summerScore == 2) if (tie1 == "none") tie1 = "summer"; else tie2 = "summer"
		if (autumnScore == 2) if (tie1 == "none") tie1 = "autumn"; else tie2 = "autumn"
		result.innerHTML = "your result: a fusion of " + tie1 + " and " + tie2 + "!"
		
		if (tie1 == "winter" && tie2 == "summer" || tie1 == "summer" && tie2 == "winter") document.body.style.backgroundColor = "#ebdcfa"
		else if (tie1 == "spring" && tie2 == "summer" || tie1 == "summer" && tie2 == "spring") document.body.style.backgroundColor = "#f2fadc"
		else if (tie1 == "autumn" && tie2 == "summer" || tie1 == "summer" && tie2 == "autumn") document.body.style.backgroundColor = "#fadce4"
		else if (tie1 == "autumn" && tie2 == "winter" || tie1 == "winter" && tie2 == "autumn") document.body.style.backgroundColor = "#e4e1f5"
		else if (tie1 == "autumn" && tie2 == "spring" || tie1 == "spring" && tie2 == "autumn") document.body.style.backgroundColor = "#f5e1ea"
		else if (tie1 == "winter" && tie2 == "spring" || tie1 == "spring" && tie2 == "winter") document.body.style.backgroundColor = "#e1f5f0"
	}
}

function restarter() {
	result.innerHTML = "your result: undecided...!"
	winterScore = 0;
	springScore = 0;
	summerScore = 0;
	autumnScore = 0;
	answered = 0;
	document.body.style.backgroundColor = "#ffffff"
	q1a1.disabled = false;
	q1a2.disabled = false;
	q1a3.disabled = false;
	q1a4.disabled = false;
	q2a1.disabled = false;
	q2a2.disabled = false;
	q2a3.disabled = false;
	q2a4.disabled = false;
	q3a1.disabled = false;
	q3a2.disabled = false;
	q3a3.disabled = false;
	q3a4.disabled = false;
	q4a1.disabled = false;
	q4a2.disabled = false;
	q4a3.disabled = false;
	q4a4.disabled = false;
	q5a1.disabled = false;
	q5a2.disabled = false;
	q5a3.disabled = false;
	q5a4.disabled = false;
}