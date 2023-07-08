// Clicks
const clicker = document.querySelector('#clicker');
const click = document.querySelector('#outClick');
let index = 0;
let aux = 0;

clicker.addEventListener("click", ()=> {
    index = index + 1;
    click.innerHTML = index;
});



// Form
const seta = document.querySelector('#seta');
const form = document.querySelector('#form');
const botao = document.querySelector('#botao');
let inpTime = 5;

seta.addEventListener('click', ()=> {
    if (seta.classList.contains('aberto') == false){
        form.style.display = 'block';
        seta.setAttribute('class', 'aberto');
    }
    else {
        seta.removeAttribute('class', 'aberto');
        form.style.display = 'none';
    }
})
botao.addEventListener('click', ()=> {
    seta.removeAttribute('class', 'aberto');
    form.style.display = 'none';
    inpTime = document.querySelector('input[name="time"]:checked').value;
});
clicker.addEventListener("click", ()=> {
    seta.removeAttribute('class', 'aberto');
    form.style.display = 'none';
});



// Timer
const timer = document.querySelector('#outTimer');
let time = 0;

clicker.addEventListener("click", ftime);

function ftime() {
    setInterval(()=> {
            time = time + 0.1;
            timer.innerHTML = time.toFixed(1) + 's';
        }, 100);
        clicker.removeEventListener('click', ftime);
}



// CPS
const cpsReal = document.querySelector('#outReal');
let cps = 0;

clicker.addEventListener("click", ()=> {
    setInterval(()=> {
        cps = (index / inpTime).toFixed(2);
        cpsReal.innerHTML = (index / time).toFixed(2);
    }, 100)
});



// Results
const tartaruga = document.querySelector('#tartaruga');
const pato = document.querySelector('#pato');
const polvo = document.querySelector('#polvo');
const orca = document.querySelector('#orca');
const golfinho = document.querySelector('#golfinho');
const aquaman = document.querySelector('#aquaman');
const semideus = document.querySelector('#semideus');
const autoclicker = document.querySelector('#autoclicker');
const resultados = document.querySelector('#resultados');
const cpsFinal = document.querySelector('#cpsFinal');
const reset = document.querySelector('#reset');

clicker.addEventListener("click", ()=> {
    setInterval(()=> {
        if (cps <= 3){
            tartaruga.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 3 && cps <= 5){
            pato.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 5 && cps <= 7){
            polvo.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 7 && cps <= 9){
            orca.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 9 && cps <= 20){
            golfinho.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 20 && cps <= 50){
            aquaman.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 50 && cps <= 500){
            semideus.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
        if (cps > 500){
            autoclicker.style.display = 'flex';
            resultados.style.display = 'flex';
            cpsFinal.innerHTML = 'CPS: ' + cps;
        }
    },inpTime*1000);
});

// themes
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const body = document.querySelector('body');
const about = document.querySelector('#about');
const aboutTheme = document.querySelector('#aboutTheme');
const divTimer = document.querySelector('#timer');
const divCps = document.querySelector('#cpsReal');
const divClick = document.querySelector('#click');
const fieldset = document.querySelector('fieldset');

sun.addEventListener('click', ()=> {
    sun.style.display = 'none';
    moon.style.display = 'block';
    body.setAttribute('class', 'temaEscuro');
    clicker.setAttribute('class', 'temaEscuro');
    about.setAttribute('class', 'temaEscuro');
    aboutTheme.setAttribute('class', 'temaEscuro');
    divTimer.setAttribute('class', 'infos temaEscuro');
    divCps.setAttribute('class', 'infos temaEscuro');
    divClick.setAttribute('class', 'infos temaEscuro');
    fieldset.setAttribute('class', 'temaEscuro');
    botao.setAttribute('class', 'temaEscuro');
    reset.setAttribute('class', 'temaEscuro');
    tartaruga.setAttribute('class', 'results temaEscuro');
    pato.setAttribute('class', 'results temaEscuro');
    polvo.setAttribute('class', 'results temaEscuro');
    orca.setAttribute('class', 'results temaEscuro');
    golfinho.setAttribute('class', 'results temaEscuro');
    aquaman.setAttribute('class', 'results temaEscuro');
    semideus.setAttribute('class', 'results temaEscuro');
    autoclicker.setAttribute('class', 'results temaEscuro');
});

moon.addEventListener('click', ()=> {
    sun.style.display = 'block';
    moon.style.display = 'none';
    body.removeAttribute('class', 'temaEscuro');
    clicker.removeAttribute('class', 'temaEscuro');
    about.removeAttribute('class', 'temaEscuro');
    aboutTheme.removeAttribute('class', 'temaEscuro');
    divTimer.setAttribute('class', 'infos');
    divCps.setAttribute('class', 'infos');
    divClick.setAttribute('class', 'infos');
    fieldset.removeAttribute('class', 'temaEscuro');
    botao.removeAttribute('class', 'temaEscuro');
    reset.removeAttribute('class', 'temaEscuro');
    tartaruga.setAttribute('class', 'results');
    pato.setAttribute('class', 'results');
    polvo.setAttribute('class', 'results');
    orca.setAttribute('class', 'results');
    golfinho.setAttribute('class', 'results');
    aquaman.setAttribute('class', 'results');
    semideus.setAttribute('class', 'results');
    autoclicker.setAttribute('class', 'results');
});

// about
const questionMark = document.querySelector('#questionMark');

questionMark.addEventListener('mouseenter', mouseOver);
function mouseOver() {
    about.style.display = 'flex';
    aboutTheme.style.display = 'flex';
}
questionMark.addEventListener('mouseleave', mouseLeave);
function mouseLeave() {
    questionMark.style.color = "rgb(247, 247, 247)";
    about.style.display = 'none';
    aboutTheme.style.display = 'none';
}

questionMark.addEventListener('touchstart', mouseOver);
questionMark.addEventListener('touchend', mouseLeave);

