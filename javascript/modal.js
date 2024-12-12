//Variables de audio
var abre_plantillas=document.getElementById("transicion_plantillas");
var carta_vacia=document.getElementById("alerta_cartavacia");
var audio_papa=document.getElementById("carta_papa");
var audio_mama=document.getElementById("carta_mama");
const modal = document.querySelector("#agregando");

let generoDestinatario = null;
let contDestinatarios = 0;

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
	 document.getElementById('indicator').classList.remove('hid');
});

hablar.addEventListener("click", ()=>{
		  salida.classList.add('brillo');

	  setTimeout(() => {
		salida.classList.remove('brillo');
	  }, 1000);
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

function abrirModal(){
	modal.showModal();
	decir("Para agregar un destinatario selecciona si es hombre o mujer")
}

function genero(gen){
	generoDestinatario = gen;
	decir(gen);
}

function agregarDestinatario(){	
	const parentesco = document.getElementById('parentesco').value;
	const nombre = document.getElementById('nombre').value;
	
	
	if (!generoDestinatario) {
        decir('No has seleccionado ningún género. Elige uno primero.');
        return;
    }

    if (!parentesco) {
        decir('Por favor, ingresa un parentesco antes de enviar.');
        return;
    }
	
	if (!nombre) {
        decir('Por favor, ingresa un nombre antes de enviar.');
        return;
    }

	contDestinatarios++;
	decir(contDestinatarios.toString());
	
	nuevoDest = document.getElementById(contDestinatarios.toString());
	nuevoDesImg = document.getElementById("img"+contDestinatarios.toString());
	nuevoDest.style.visibility = "visible";
	nuevoDest.setAttribute("name", parentesco+" "+nombre);
	if(generoDestinatario === "hombre"){
		nuevoDesImg.setAttribute("src", "../Usabilidad/img/hombre.png");
	}
	if(generoDestinatario === "mujer"){
		nuevoDesImg.setAttribute("src", "../Usabilidad/img/mujer.png");
	}
	
	cerrarModal();
}



function cerrarModal(){
	modal.close();
}


//Funciones de borrado
//Ventana emergente
var dialogo_borrado=document.querySelector("#borrado");
//Audios
var p_borrar=document.getElementById("p_borrar");
var si_borrar=document.getElementById("si_borrar");
var no_borrar=document.getElementById("no_borrar");
var conf_borrar=document.getElementById("c_borrar");
function abrirBorrado()
{
	dialogo_borrado.showModal();
	p_borrar.play();
}
function p_si_borrar()
{
	si_borrar.play();
}
function p_no_borrar()
{
	no_borrar.play();
}
function borrar()
{
	var mensaje_carta = document.getElementById("salida");
	dialogo_borrado.close();
	mensaje_carta.innerHTML="";
	conf_borrar.play();
}
function noBorrar()
{
	dialogo_borrado.close();
}
