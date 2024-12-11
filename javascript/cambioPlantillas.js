    const div = document.getElementById('salida');
    const botones = document.querySelectorAll('.btnpl');

    botones.forEach(boton => {
      boton.addEventListener('click', function () {
        const nuevaImagen = boton.getAttribute('data-imagen');
        div.style.backgroundImage = `url('${nuevaImagen}')`;
      });
    });

