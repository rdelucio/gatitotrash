const gato = document.getElementById('gato');
const comida = document.getElementById('comida');
const juguete = document.getElementById('juguete');
const cama = document.getElementById('cama');

let interacciones = 0;

// Función para mover el gato aleatoriamente
function moverGato() {
    const maxX = 540; // Ancho de la caja `#casa` menos el ancho del gato
    const maxY = 540; // Alto de la caja `#casa` menos el alto del gato
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    gato.style.left = `${x}px`;
    gato.style.top = `${y}px`;
}

// Función para mostrar comida, juguete o cama aleatoriamente
function mostrarObjeto(objeto) {
    objeto.style.display = 'block';
    const maxX = 560; // Ajustado para posición dentro de la caja `#casa`
    const maxY = 560;
    objeto.style.left = `${Math.floor(Math.random() * maxX)}px`;
    objeto.style.top = `${Math.floor(Math.random() * maxY)}px`;
}

// Función para ocultar un objeto
function ocultarObjeto(objeto) {
    objeto.style.display = 'none';
}

// Evento para mover al gato al hacer click
gato.addEventListener('click', () => {
    moverGato();
    interacciones++;
    
    if (interacciones % 2 === 0) {
        mostrarObjeto(comida);
        setTimeout(() => ocultarObjeto(comida), 2000);
    } else if (interacciones % 3 === 0) {
        mostrarObjeto(juguete);
        setTimeout(() => ocultarObjeto(juguete), 2000);
    }

    if (interacciones >= 4) {
        mostrarObjeto(cama);
        setTimeout(() => ocultarObjeto(cama), 3000);
        interacciones = 0;
    }
});
