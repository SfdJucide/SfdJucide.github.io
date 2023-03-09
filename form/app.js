let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let tg2 = {
    token: "6087779539:AAEoDobY1T0kDmvS6i9EZ-2X9ZpACXesXOg", // Your bot's token that got from @BotFather
//     chat_id: "-1001821397769" // The user's(that you want to send a message) telegram chat id
    chat_id: "-1001856397178" // The user's(that you want to send a message) telegram chat id
}

function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg2.token}/sendMessage?chat_id=${tg2.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

document.getElementById('question_form').addEventListener('submit', function(event) {
	event.preventDefault();
	//sendMessage(this.question.value);
	// tg.sendData(this.question.value);
	tg.sendData("some shit");
	Telegram.WebApp.close();
});

// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData(item);
// });
