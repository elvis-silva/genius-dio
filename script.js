let order = [];
let clickedOrder = [];
let score = 0;

const GREEN_COLOR = 0;
const RED_COLOR = 1;
const YELLOW_COLOR = 2;
const BLUE_COLOR = 3;

const greenElement = document.querySelector('.green');
const redElement = document.querySelector('.red');
const yellowElement = document.querySelector('.yellow');
const blueElement = document.querySelector('.blue');

// Cria ordem aleatória das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        lightColor(createColorElement(order[i]), Number(i) + 1);
    }
};

// Acende a próxima cor
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 150);
};

// Checa se os botões clicados são os mesmos da ordem gerada no game
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
};

// Function para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
};

// Function que retorna a cor
let createColorElement = (color) => {
    switch(color) {
        case GREEN_COLOR:
            return greenElement;
        case RED_COLOR:
            return redElement;
        case YELLOW_COLOR:
            return yellowElement;
        case BLUE_COLOR:
            return blueElement;
        default:
            break;
    }
};

let nextLevel = () => {
    score++;
    shuffleOrder();
};

let playGame = () => {
    order = [];
    clickedOrder = [];
    score = 0;

    alert('Bem vindo ao Gênius!');

    nextLevel();
};

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClick em OK para jogar novamente.`);

    playGame();
};

greenElement.onclick = () => click(GREEN_COLOR);
redElement.onclick = () => click(RED_COLOR);
yellowElement.onclick = () => click(YELLOW_COLOR);
blueElement.onclick = () => click(BLUE_COLOR);

playGame();