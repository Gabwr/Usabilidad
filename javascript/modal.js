function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    const textoSalida = document.getElementById('salida').innerHTML;//muestra el texto de salida en el overlay
    document.getElementById('textoModal').innerHTML = textoSalida;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

    function changeTextArial() {
            const textoModal = document.getElementById('textoModal');
      
      textoModal.style.fontFamily = textoModal.style.fontFamily === 'Arial, sans-serif'
        ? "'Comic Sans MS', cursive"
        : "Arial, sans-serif";
    }

//Funciones de toma de microfono
var botonMic = document.getElementById("mic");
var salida = document.getElementById("salida");

let recognition;
recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";

const salidas = document.getElementById('salida');
salidas.innerHTML = 'Tu texto esta aqui';

//funcion mostar en el div texto incial
function mostrarTexto() {
        const inputTexto = document.getElementById('texto').value; 
        const salida = document.getElementById('salida');
        salida.innerHTML = inputTexto; 
    }

recognition.onresult = function (event) {
	salida.innerHTML = ""; 
	const result = event.results[0][0].transcript;
	const notaDiv = document.createElement("salida");
	notaDiv.textContent = result;
	salida.append(notaDivc);
};



botonMic.addEventListener("click", function(){
	recognition.start();
});