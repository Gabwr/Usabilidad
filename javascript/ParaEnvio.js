	const script = document.createElement("script");
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

	script.onload = () => {
	document.getElementById("enviar").addEventListener("click", async () => {
  const div = document.getElementById("salida");
  //div a canva
  const canvas = await html2canvas(div);
  canvas.toBlob(async (blob) => {
    // Guardamos la imagen en la carpeta de descarga
    const fileName = "carta.png";
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    // Enviar la imagen al backend para enviarla por correo
    const formData = new FormData();
    formData.append("image", blob, fileName);

    fetch("http://localhost:8080/Usabilidad/uploads", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en el servidor");
        }
        return response.json();
      })
      .then((data) => {
        alert("Correo enviado con éxito.");
      })
      .catch((error) => {
        console.error("Error enviando la imagen:", error);
        alert("Hubo un error al enviar el correo.");
      });
  }, "image/png");
});
	}
	
	document.head.appendChild(script);