//Variables de audio
var abre_plantillas=document.getElementById("transicion_plantillas");
var carta_vacia=document.getElementById("alerta_cartavacia");
var audio_papa=document.getElementById("carta_papa");
var audio_mama=document.getElementById("carta_mama");

    function changeTextArial() {
      const textoModal = document.getElementById('salida');
      textoModal.style.fontFamily =  'Arial, sans-serif';
    }
	function changeTextFantasy() {
      const textoModal = document.getElementById('salida');
      textoModal.style.fontFamily =  'Fantasy';
    }
	function changeTextTimesN() {
      const textoModal = document.getElementById('salida');
      textoModal.style.fontFamily =  'Times New Roman';
    }
//Funciones de toma de microfono
var botonMic = document.getElementById("mic");
var salida = document.getElementById("salida");

const hablar = document.getElementById("hear");

let recognition;
recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";

const salidas = document.getElementById('salida');
salidas.innerHTML = 'Tu texto va aqui';

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
	salida.append(notaDiv);
};



botonMic.addEventListener("click", function(){
	recognition.start();
});

hablar.addEventListener("click", ()=>{
	decir(document.getElementById("salida").innerText);
});

function decir(texto){
	var mensaje = new SpeechSynthesisUtterance(texto);
	const voces = window.speechSynthesis.getVoices();
	
	mensaje.volume = 1;
	speechSynthesis.speak(mensaje);
}

function validarModal(){
	console.log("validarModal ejecutado");
    var mensaje_carta = document.getElementById("salida").innerText;
    if (mensaje_carta == "" || mensaje_carta == "Tu texto va aqui") {
        carta_vacia.play();
    } else {
		
    }
}
function cartaPapa()
{
	audio_papa.play();
}
function cartaMama()
{
	audio_mama.play();
}

