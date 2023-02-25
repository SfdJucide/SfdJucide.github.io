let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

document.getElementById('question_form').addEventListener('submit', function(event) {
	event.preventDefault();
	tg.sendData(this.question.value);
	console.log(this.question.value);
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});