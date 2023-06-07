var a = 0;
var b = 0;
var numofprompts = 0;
var numofcorrectanswers = 0;

//some copy pasted code from stackoverflow to make page not refresh on submit
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

newprompt();

function newprompt() {
	a = parseInt(Math.random() * 12 + 1);
	b = parseInt(Math.random() * 12 + 1);
	document.getElementById("promptp").innerHTML = a.toString(12).toUpperCase() + " * " + b.toString(12).toUpperCase();
	numofprompts++;
}

function submitanswer() {
	if (parseInt(document.getElementById("useranswer").value, 12) == (a * b)) {
		document.getElementById("answerreturn").innerHTML = "Correct! " + document.getElementById("promptp").innerHTML + " = " + (a * b).toString(12).toUpperCase();
		numofcorrectanswers++;
	} else {
		document.getElementById("answerreturn").innerHTML = "Incorrect! " + document.getElementById("promptp").innerHTML + " = " + (a * b).toString(12).toUpperCase();
	}
	document.getElementById("correctanswers").innerHTML = "You correctly answered " + numofcorrectanswers.toString(12).toUpperCase() + " out of " + numofprompts.toString(12).toUpperCase() + " prompts so far.";
	newprompt();
	document.getElementById("useranswer").value = "";
}
