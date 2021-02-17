let order =[];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector['.blue'];
const yellow = document.querySelector['.yellow'];
const red = document.querySelector['.red'];
const green = document.querySelector['.green'];

//blue 0
//yellow 1
//red 2
//green 3

//gerando as cores aleatoriamente

let shuffleOrder = () => {
    let colorOrder = Math.floor[Math.random()*4];
    order[order.length]=colorOrder;
    clickedOrder =[];

    for (let i in order){
        let elementColor = createColorElement (order[i]);
        lightColor(elementColor, Number[i]+1);
    }
}

//acende a proxima cor

let lightColor =(element, number) => {
    number = number * 500;

    setTimeout(() =>{
        element.classList.add('selected');

    }, number - 250);

    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

//verificar se a cor gerada e a mesma selecionada

let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
        if(clickedOrder.length==order.length){
            alert(`Pontuação: ${score}\nVoce acertou, iniciando proximo nível`);
        }
}

//função clicar

let click =(color) =>{
    clickedOrder[clickedOrder.length]=color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        elementColor(color).classList.remove('selected');
        checkOrder();

     });
}