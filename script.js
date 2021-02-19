let order =[];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//blue 0    // 0 verde
//yellow 1  //1 vermelho
//red 2    //2 amarelo
//green 3  //3azul

//gerando as cores aleatoriamente

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length]=colorOrder;
    clickedOrder =[];

    for (let i in order){
        let elementColor = createColorElement (order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//acende a proxima cor

let lightColor =(element, number) => {
    number = number * 500;

    setTimeout(() =>{
        element.classList.add("selected");
    }, number - 250);

    setTimeout(() =>{
        element.classList.remove("selected");
    });
}

//verificar se a cor gerada e a mesma selecionada

let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
        if(clickedOrder.length==order.length){
            alert(`Pontuação: ${score}\nVoce acertou, iniciando proximo nível`);
            nextLevel();
        }
}

//função clicar

let click =(color) =>{
    clickedOrder[clickedOrder.length]=color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
     }, 250);
}

//função que "acende" as cores

let createColorElement = (color) =>{
    if(color == 0){
        return green;}
        else if (color==1){
            return red;
    } else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//função proximo nível

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//função Game Over
let gameOver = () =>{
    alert(`Pontuação: ${score}\nVoce perdeu o jogo!\n Clique em OK para reiniciar o jogo`);
    order=[];
    clickedOrder=[];
    playGame();
}

//função iniciar jogo
let playGame = () =>{
    alert('Bem Vindo ao Genius! Iniciando um novo jogo');
    score=0;
    nextLevel();
}

//gerando evento click

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


/*blue.addEventListener('click', click(0));
yellow.addEventListener('click', click(1));
red.addEventListener('click', click(2));
green.addEventListener('click', click(3));*/

playGame();