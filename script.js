const farol = document.getElementById("farol");
const botao = document.getElementById("botao");
let corIndice = 0
let pararintervalo = null

const coresDoTrafico = (Event) => {

    const corClicada = Event.target.id;

    if (corClicada === "automatico" && pararintervalo === null) {
        iniciarSemaforo()}else{ pararSemaforo();
    }
    if (turnOn[corClicada]) {
        turnOn[corClicada]();
    }
}
const proximaCor = ()=> corIndice = corIndice<2?++corIndice: 0

const mudarDeCor = () =>{ 
const cores = ["vermelho","amarelo","verde"];
const cor = cores[corIndice];
turnOn[cor]()
proximaCor() 
}

const iniciarSemaforo = ()=> {
pararintervalo = setInterval(mudarDeCor, 1000);
};


const pararSemaforo = () => {
    clearInterval(pararintervalo);
    pararintervalo = null
}

const turnOn = {
    "vermelho" : () => farol.src = "./img/vermelho.png",
    "amarelo" : ()=> farol.src = "./img/amarelo.png",
    "verde" : ()=> farol.src = "./img/verde.png",
    "desligado" : ()=> farol.src = "./img/desligado.png",
}

botao.addEventListener('click',coresDoTrafico);
