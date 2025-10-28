var a = 0;
var b = 0;
var numofprompts = 0;
var numofcorrectanswers = 0;
var currentType = 0;
var currentTypeMD = 0;
switchType(0);

//some copy pasted code from stackoverflow to make page not refresh on submit
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
//up to here

function resetPractice() {
	a = 0;
	b = 0;
	numofprompts = 0;
	numofcorrectanswers = 0;
	newprompt();
	document.getElementById("correctanswers").innerHTML = "";
}

function newprompt() {
	a = parseInt(Math.random() * 12 + 1);
	b = parseInt(Math.random() * 12 + 1);
	if (currentType == 2) {
		if (Math.random() < 0.5) {
			currentTypeMD = 0;
		} else {
			currentTypeMD = 1;
		}
	} else {
		currentTypeMD = currentType;
	}
	if (currentTypeMD == 0) {
		document.getElementById("promptp").innerHTML = a.toString(12).toUpperCase() + " * " + b.toString(12).toUpperCase();
	} else if (currentTypeMD == 1) {
		document.getElementById("promptp").innerHTML = (a*b).toString(12).toUpperCase() + " / " + b.toString(12).toUpperCase();
	}
	numofprompts++;
}

function submitanswer() {
	var correctAnswer = 0;
	if (currentTypeMD == 0) {
		correctAnswer = a * b;
	} else if (currentTypeMD == 1) {
		correctAnswer = a;
	}
	if (parseInt(document.getElementById("useranswer").value, 12) == correctAnswer) {
		document.getElementById("answerreturn").innerHTML = "Correct! " + document.getElementById("promptp").innerHTML + " = " + (correctAnswer).toString(12).toUpperCase();
		numofcorrectanswers++;
	} else {
		document.getElementById("answerreturn").innerHTML = "Incorrect! " + document.getElementById("promptp").innerHTML + " = " + (correctAnswer).toString(12).toUpperCase();
	}
	document.getElementById("correctanswers").innerHTML = "You correctly answered " + numofcorrectanswers.toString(12).toUpperCase() + " out of " + numofprompts.toString(12).toUpperCase() + " prompts so far.";
	newprompt();
	document.getElementById("useranswer").value = "";
}

function switchType(x) {
	currentType = x;
	document.getElementById("switchM").disabled = false;
	document.getElementById("switchD").disabled = false;
	document.getElementById("switchMD").disabled = false;
	if (x == 0) {
		document.getElementById("switchM").disabled = true;
		document.getElementById("titleInfo").innerHTML = "Multiplications";
	} else if (x == 1) {
		document.getElementById("switchD").disabled = true;
		document.getElementById("titleInfo").innerHTML = "Divisions";
	} else if (x == 2) {
		document.getElementById("switchMD").disabled = true;
		document.getElementById("titleInfo").innerHTML = "Mixed Multiplications and Divisions";
	}
	resetPractice();
}
