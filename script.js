// Instâncias
const semaforo = document.getElementById('semaforo')
const btnVermelho = document.getElementById('button-vermelho')
const btnAmarelo = document.getElementById('button-amarelo')
const btnVerde = document.getElementById('button-verde')
const btnAuto = document.getElementById('button-automatico')
let idInterval
/* -------------------------------------------------------------------------------------- */
// Funções 
// Desligado
function seDesligado() {
    return semaforo.src = 'img/desligado.png'
}
// Vermelho
function corVermelha() {
    semaforo.src = 'img/vermelho.png'
    clearInterval(idInterval)
}
// Amarelo
function corAmarela() {
    semaforo.src = 'img/amarelo.png'
    clearInterval(idInterval)
}
// Verde
function corVerde() {
    semaforo.src = 'img/verde.png'
    clearInterval(idInterval)
}

// Trocar Cores Automatico
function trocarCores() {
    if (semaforo.src.includes('vermelho')) { 
        semaforo.src = 'img/verde.png'
    } else if (semaforo.src.includes('amarelo')) {
        semaforo.src = 'img/vermelho.png'
    } else if (semaforo.src.includes('verde')) {
        semaforo.src = 'img/amarelo.png'
    } else { 
        semaforo.src = 'img/vermelho.png'
    }
}

function corAutomatica() {
    if (btnAuto.textContent == 'Automático') {
        idInterval = setInterval(trocarCores, 2000)
        btnAuto.textContent = 'Parar'
    } else {
        clearInterval(idInterval)
        btnAuto.textContent = 'Automático'
    }
    
}
/* -------------------------------------------------------------------------------------- */
// Eventos
btnVermelho.addEventListener('click', corVermelha)
btnAmarelo.addEventListener('click', corAmarela)
btnVerde.addEventListener('click', corVerde)
btnAuto.addEventListener('click', corAutomatica)


