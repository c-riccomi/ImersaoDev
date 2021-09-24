var cartas = [{
    nome: "Damon Salvatore",
    atributos: {
      forca: 85,
      inteligencia: 75,
      aparencia: 90,
      humor: 95
    }}, {
    nome: "Scott Mccall",
    atributos: {
      forca: 75,
      inteligencia: 40,
      aparencia: 65,
      humor: 50
    }}, {
    nome: "Oliver Queen",
    atributos: {
      forca: 60,
      inteligencia: 80,
      aparencia: 85,
      humor: 65
    }}, {
    nome: "Spencer Reid",
    atributos: {
      forca: 20,
      inteligencia: 98,
      aparencia: 80,
      humor: 70
    }}, {
    nome: "Jim Halpert",
    atributos: {
      forca: 40,
      inteligencia: 60,
      aparencia: 75,
      humor: 85
    }}, {
    nome: "Klaus Mikaelson",
    atributos: {
      forca: 98,
      inteligencia: 70,
      aparencia: 82,
      humor: 72
    }}];


/*
  força: klaus > damon > scott > oliver > jim > spencer
  inteligencia: spencer > oliver > damon > klaus > jim > scott
  aparencia: damon > oliver > klaus > spencer > jim > scott
  humor: damon > jim > spencer > oliver > scott
*/

var cartaMaquina, cartaJogador;


function sortearCarta() {
  cartaJogador = cartas[parseInt(Math.random() * 6)];
  console.log(cartaJogador);

  var numeroCartaMaquina = parseInt(Math.random() * 6);
  while (cartas[numeroCartaMaquina] == cartaJogador) {
    numeroCartaMaquina = parseInt(Math.random() * 6);
  }
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}


function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'> " + atributo + "<br><br>";
  }
  opcoes.innerHTML = opcoesTexto;
}


function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}


function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<h1>Você venceu 🥳🏆🥇</h1>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML =
      "<h1>Você perdeu. A carta do adversário era maior 😔😔😔</h1>";
  }
}
