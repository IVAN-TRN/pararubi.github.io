const musicaGeneral = document.getElementById('musicaGeneral');
const musicaEspecial = document.getElementById('musicaEspecial');
const btn = document.getElementById('playButton');

btn.addEventListener('click', () => {
  musicaGeneral.play();
  btn.style.display = 'none'; // Oculta el botón cuando empieza la música general
});

function mostrarParte(numero) {
  const partes = document.querySelectorAll('.parte');
  partes.forEach(parte => parte.classList.remove('active'));

  const parteActual = document.getElementById(`parte${numero}`);
  if (parteActual) {
    parteActual.classList.add('active');
  }

  if (numero >= 4) {
  musicaGeneral.pause();
  if (musicaEspecial.paused) {
    musicaEspecial.currentTime = 0;
    musicaEspecial.play();
  }
} else {
  musicaEspecial.pause();
  musicaGeneral.play();
}

}

window.onload = function() {
  mostrarParte(1);
};
