let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let form = document.getElementById('question_form');
form.addEventListener('submit', getFormValue);

let btn1 = document.getElementById("btn1");

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

btn1.addEventListener('click', 	function() {
	tg.sendData("some shit")
});

function getFormValue(event) {
    event.preventDefault();
	let question = form.querySelector('[question="question"]')
	console.log(question)
}