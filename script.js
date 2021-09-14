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
}
// Amarelo
function corAmarela() {
    semaforo.src = 'img/amarelo.png'
}
// Verde
function corVerde() {
    semaforo.src = 'img/verde.png'
}

// Trocar Cores Automatico
function trocarCores() {
    if (semaforo.src.includes('vermelho')) { 
        corVerde() 
    } else if (semaforo.src.includes('amarelo')) {
        corVermelha() 
    } else if (semaforo.src.includes('verde')) {
        corAmarela()
    } else { 
        corVermelha() 
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


