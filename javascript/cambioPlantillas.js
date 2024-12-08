    const div = document.getElementById('carta');
    const botones = document.querySelectorAll('.btnpl');

    botones.forEach(boton => {
      boton.addEventListener('click', function () {
        const nuevaImagen = boton.getAttribute('data-imagen');
        div.style.backgroundImage = `url('${nuevaImagen}')`;
      });
    });