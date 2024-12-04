function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

var botonMic = document.getElementById("mic");
var salida = document.getElementById("salida");

let recognition;
recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";

recognition.onresult = function (event) {
	const result = event.results[0][0].transcript;
	const notaDiv = document.createElement("salida");
	
	notaDiv.textContent = result;
	salida.append(notaDiv);
};


botonMic.addEventListener("click", function(){
	recognition.start();
});