
import $ from "jquery";

$(document).ready(function () {
    //Script Saude_Roney
// Locais dos exercicios--------------------------
let divTitulo = document.getElementById("Titulo");
//------------------------------------------------

//------DESCRIÇÕES DE CADA EXERCÍCIO--------------------------------------
function Exercicios(Titulo) {
  return {
    Titulo: Titulo,
  };
}

let Exercicio = [];
Exercicio[1] = Exercicios(
  "Saltitos"
);

Exercicio[2] = Exercicios(
  "Agachamento"
);

Exercicio[3] = Exercicios(
  "Corrida"
);

Exercicio[4] = Exercicios(
  "Prancha"
);

Exercicio[5] = Exercicios(
  "Polichinelo"
);

Exercicio[6] = Exercicios(
  "Agachamento com chute"
);

Exercicio[7] = Exercicios(
  "Tocar os pés"
);

Exercicio[8] = Exercicios(
  "Flexão"
);

//------FIM DAS DESCRIÇÕES------------------------------------------------

//Variaveis utilizadas para rodar o treino Aleatório
let gifNum = new Array(7);
let menu = document.querySelector("#MENU");
var exercicio = document.createElement("img");
exercicio.setAttribute("id", "gif");
var menuTempo = document.getElementById("menuTempo");
var tempo = document.getElementById("tempo");
let treino = document.getElementById("treino");
let divBtn = document.getElementById("divBtn");
let botao = document.getElementById("btniniciar");
let btnDrop = document.getElementById("Drop");
//Função que modifica o treino apresentado, utilizando o parametro
function AF(x) {
  exercicio.setAttribute("src", `assets/gifs/exercicio${x}.gif`);
}
//tempo do Treino completo com decanso
let tempoTreino = 0;
//função que roda o codigo do treino
$('#btniniciar').click(function () {
    gifNum[0, 1, 2, 3, 4, 5, 6, 7] = 0;
    divTitulo.style.display = "";
    itens.style.display = "none";
    btnDrop.style.display = "none";
    treino.appendChild(exercicio);
    divBtn.innerHTML = "";
    
    for (var i = 0; i <= 7; i++) {
      var num = Math.floor(Math.random() * 8 + 1);
      if (gifNum.indexOf(num) == -1) gifNum[i] = num;
      else i--;
    }
    tempoTreino =
      parseInt(inputTempoTreino.value) + parseInt(inputTempoDescanso.value);
    var x = tempoTreino;
    var contador = 0;
    AF(gifNum[0]);
    divTitulo.innerHTML = Exercicio[gifNum[0]].Titulo;
    var temporizador = setInterval(() => {
      x -= 1;
      if (x > parseInt(inputTempoTreino.value)) {
        menuTempo.innerHTML = `Prepare-se`;
        tempo.innerHTML = `Faltam ${
          x - inputTempoTreino.value
        } segundos para começar o treino`;
      }
      if (x == 0) {
        x = tempoTreino;
      }
      if (x <= parseInt(inputTempoTreino.value)) {
        menuTempo.innerHTML = `TREINE!!!`;
        tempo.innerHTML = `Faltam ${x} segundos para terminar o treino`;
      }
    }, 1000);
    for (let i = 1; i <= 7; i++) {
      contador += 1;
      setTimeout(() => {
        AF(gifNum[i]);
        divTitulo.innerHTML = Exercicio[gifNum[i]].Titulo;
      }, contador * tempoTreino * 1000);
    }
    setTimeout(() => {
      clearInterval(temporizador);
      treino.innerHTML = "";
      tempo.innerHTML = "Treino terminado";
      divBtn.appendChild(botao);
      btnDrop.style.display = "";
      itens.style.display = "";
      divTitulo.style.display = "none";
      divTitulo.innerHTML = "";
    }, 8 * tempoTreino * 1000);
  })

//Dropdown de input de tempo do treino
let dropon = 1;
let itens = document.getElementById("dropItens");
//tempo de treino
var textTempoTreino = document.createElement("p");
textTempoTreino.innerHTML = "Tempo de treino";
var inputTempoTreino = document.createElement("input");
inputTempoTreino.setAttribute("type", "text");
inputTempoTreino.setAttribute("class", "UserTemp");
//valor base tempo de treino = 30
inputTempoTreino.setAttribute("value", "30");
//---------------------------------------------------------------------------------------------
//tempo de descanso
var textTempoDescanso = document.createElement("p");
textTempoDescanso.innerHTML = "Tempo de descanso";
var inputTempoDescanso = document.createElement("input");
inputTempoDescanso.setAttribute("type", "text");
inputTempoDescanso.setAttribute("class", "UserTemp");
//valor base tempo de descanso = 20
inputTempoDescanso.setAttribute("value", "20");
//---------------------------------------------------------------------------------------------
function verificação() {
  if (dropon == -1) {
    itens.appendChild(textTempoTreino);
    itens.appendChild(inputTempoTreino);
    itens.appendChild(textTempoDescanso);
    itens.appendChild(inputTempoDescanso);
    itens.style.backgroundColor = "rgb(246, 245, 245);";
    itens.style.borderStyle = "solid 1px";
    itens.setAttribute("class", "open");
  } else {
    itens.setAttribute("class", "close");
    setTimeout(() => {
      itens.style.backgroundColor = "rgb(246, 245, 245);";
      itens.style.borderStyle = "none";
      itens.innerHTML = "";
      itens.setAttribute("class", "");
    }, 1000);
    dropon == 1;
  }
}

$('#Drop').click(function () {
  dropon *= -1;
  verificação();
})



//Audio explicação andré
const som = new Audio('assets/sound/Explicacao.mp3');

$('#Audio').click (function () {
    var audio = document.getElementById("Audio");
    audio.style.display = 'none';
    som.play();
    setTimeout(() => {
        audio.style.display = "";
    }, 51000);
})
})

