let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

document.getElementById('question_form').addEventListener('submit', function(event) {
	event.preventDefault();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

function getFormValue(event) {
    event.preventDefault();
	let question = form.querySelector('[question="question"]')
	console.log(question)
}
