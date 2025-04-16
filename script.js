document.addEventListener('DOMContentLoaded', () => {
    const contadorMadera = document.getElementById('contador-madera');
    const contadorPiedra = document.getElementById('contador-piedra');
    const contadorDiamante = document.getElementById('contador-diamante');
    const blockMadera = document.getElementById('block-madera');
    const blockPiedra = document.getElementById('block-piedra');
    const blockDiamante = document.getElementById('block-diamante');
    const specialText = document.getElementById('special-text');

    let maderaRecolectada = 0;
    let piedraRecolectada = 0;
    let diamanteRecolectado = 0;

    blockMadera.addEventListener('click', () => {
        maderaRecolectada++;
        contadorMadera.textContent = maderaRecolectada;
        mostrarMensajeEspecial();
    });

    blockPiedra.addEventListener('click', () => {
        piedraRecolectada++;
        contadorPiedra.textContent = piedraRecolectada;
        mostrarMensajeEspecial();
    });

    blockDiamante.addEventListener('click', () => {
        diamanteRecolectado++;
        contadorDiamante.textContent = diamanteRecolectado;
        mostrarMensajeEspecial();
    });

    function mostrarMensajeEspecial() {
        const totalRecolectado = maderaRecolectada + piedraRecolectada + diamanteRecolectado;
        if (totalRecolectado >= 20) {
            specialText.textContent = "¡Eres increíble minando, Maxwell! ✨";
        } else if (totalRecolectado >= 10) {
            specialText.textContent = "¡Muy bien, Maxwell! ¡Sigue recolectando! 😊";
        }
    }
});