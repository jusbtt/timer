const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
const relogio = document.querySelector('.relogio');

function hours(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0;
let timer;

function start() {
    timer = setInterval(function () {
        segundos++,
            relogio.innerText = hours(segundos);
    }, 1000)
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearTimeout(timer);
        start();
        relogio.classList.remove('pausado');
    }
    if (el.classList.contains('pausar')) {
        clearTimeout(timer);
        relogio.classList.add('pausado');
    }
    if (el.classList.contains('reiniciar')) {
        clearTimeout(timer);
        relogio.classList.remove('pausado');
        relogio.innerText = '00:00:00'
        segundos = 0;
    }
})