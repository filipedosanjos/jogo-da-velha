const valores = {}
let count = false;
let pontx = 0;
let ponty = 0;

function zerarValores() {
  valores.bloco1 = 1;
  valores.bloco2 = 2;
  valores.bloco3 = 3;
  valores.bloco4 = 4;
  valores.bloco5 = 5;
  valores.bloco6 = 6;
  valores.bloco7 = 7;
  valores.bloco8 = 8;
  valores.bloco9 = 9;
}
zerarValores();

function setEscolha(bloco) {
  let element = document.getElementById(bloco);

  /* 
  * count = (count + 1) % 2; 
  * Essa função alterna entre uma quantidade x de valores, basta alterar o valor após o operador %.
    nesse caso como precisarei apenas de 2 valores, irei utilizar uma variável booleana.
  */
 if (element.innerHTML == "") {
    count = !count;

    if (count === true) {
      element.innerHTML = "x";
      valores[bloco] = "x";

      document.getElementById("game-header").innerHTML = "Vez de: O"
    } else if (count === false) {
      element.innerHTML = "o";
      valores[bloco] = "o";

      document.getElementById("game-header").innerHTML = "Vez de: X"
    } else {
      alert("Houve um erro");
    }

  }
  verificarVitoria(count)
}

function verificarVitoria(count) {

  if (valores.bloco1 === valores.bloco2 && valores.bloco1 === valores.bloco3 ||
    valores.bloco4 === valores.bloco5 && valores.bloco4 === valores.bloco6 ||
    valores.bloco7 === valores.bloco8 && valores.bloco7 === valores.bloco9 ||
    valores.bloco1 === valores.bloco4 && valores.bloco1 === valores.bloco7 ||
    valores.bloco2 === valores.bloco5 && valores.bloco2 === valores.bloco8 ||
    valores.bloco3 === valores.bloco6 && valores.bloco3 === valores.bloco9 ||
    valores.bloco1 === valores.bloco5 && valores.bloco1 === valores.bloco9 ||
    valores.bloco3 === valores.bloco5 && valores.bloco3 === valores.bloco7
  ) {

    if (count === true) {
      document.getElementById("mensagem-vitoria").innerHTML = "O vencedor foi: X";
      document.getElementById("vitoria").style.display = "block";
      travarJogo();
      setPontuacao("x");
      return
    }
    else if (count === false) {
      document.getElementById("mensagem-vitoria").innerHTML = "O vencedor foi: O";
      document.getElementById("vitoria").style.display = "block";
      travarJogo();
      setPontuacao("o");
      return

    } else  {
      alert("houve algum erro");
    }  
  }

  for (let key in valores) {
    var i;

    if (valores[key] == "x" || valores[key] == "o") {
      i = true;
    }  else {
      i = false;
      break
    } 
  }

  if (i == true) {
    document.getElementById("mensagem-vitoria").innerHTML = "Empate";
    document.getElementById("vitoria").style.display = "block";
    travarJogo();
  }
}

function jogarNovamente() {
  document.getElementById("vitoria").style.display = "none";
  zerarValores();

  for (i = 1; i <= 9; i++) {
    let bloco = "bloco" + i;
    let element = document.getElementById(bloco);

    element.innerHTML = "";

    element.setAttribute("onclick", `setEscolha('${bloco}')`);
  }
  document.getElementById("game").style.backgroundColor = "#F0F7F4";
}

function travarJogo() {
  for (i = 1; i <= 9; i++) {
    let bloco = "bloco" + i;
    let element = document.getElementById(bloco);

    element.removeAttribute("onclick"); 
  }
  document.getElementById("game").style.backgroundColor = "#c9c9c9";
}

function setPontuacao(vencedor) {
  if (vencedor == "x") {
    let element = document.getElementById("jogadorx");
    pontx++;

    element.innerHTML = `Jogador (X): ${pontx}`;
  } 

  if (vencedor == "o") {
    let element = document.getElementById("jogadoro");
    ponty++;

    element.innerHTML = `Jogador (O): ${ponty}`;
  } 
}