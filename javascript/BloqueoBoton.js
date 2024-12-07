		const boton1 = document.getElementById('mic');
        const boton2 = document.getElementById('hear');
		const boton3 = document.getElementById('send');

        // Añade un evento de clic al primer botón
        boton1.addEventListener('click', () => {
            // Habilita el segundo botón
            boton2.disabled = false;
			boton3.disabled = false;
        });