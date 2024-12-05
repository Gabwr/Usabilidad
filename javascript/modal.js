//Variables de audio
var abre_plantillas=document.getElementById("transicion_plantillas");
var carta_vacia=document.getElementById("alerta_cartavacia");
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
      textoModal.style.fontFamily =  'Arial, sans-serif';
    }
	function changeTextFantasy() {
      const textoModal = document.getElementById('textoModal');
      textoModal.style.fontFamily =  'Fantasy';
    }
	function changeTextTimesN() {
      const textoModal = document.getElementById('textoModal');
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
	var mensaje_carta=document.getElementById("salida").innerText;
	if(mensaje_carta=="" || mensaje_carta=="Tu texto esta aqui")
		{
			carta_vacia.play();
		}
	else{
		openModal();
	}
}
