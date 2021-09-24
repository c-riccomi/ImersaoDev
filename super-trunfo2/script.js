/*
  IDEIAS
  - iniciar sorteando metade das cartas para o jogador e metade para a máquina
  - mostrar ao jogador a primeira carta do array
  - adicionar a carta do perdedor ao deck do vencedor
  - jogar novamente com os novos decks até alguém ficar sem cartas
  - mostrar a quantidade de cartas 
  - deixar a máquina "escolher" o atributo (intercalar)
  - declarar vencedor quando as cartas de alguém acabarem
  - botão de restart
  - adicionar áudio ao declarar o vencedor
*/

var cartas = [
  {
    nome: "Damon Salvatore",
    imagem: "https://64.media.tumblr.com/7408161b5605a353f0e7476de61b932e/tumblr_pbtry23vur1s0v7b0o5_400.png",
    atributos: {
      forca: 85,
      inteligencia: 75,
      aparencia: 90,
      humor: 95
    }}, {
    nome: "Scott Mccall",
    imagem: "https://i.pinimg.com/originals/47/31/a7/4731a7690aa8f608f17b7d50af1e78aa.jpg",
    atributos: {
      forca: 75,
      inteligencia: 40,
      aparencia: 65,
      humor: 50
    }}, {
    nome: "Oliver Queen",
    imagem: "https://i.pinimg.com/originals/25/1a/f5/251af5c35a4e2a7579abaee680f7da2e.jpg",
    atributos: {
      forca: 60,
      inteligencia: 80,
      aparencia: 85,
      humor: 65
    }}, {
    nome: "Spencer Reid",
    imagem: "https://i.pinimg.com/564x/ca/13/21/ca1321314eeed4521216be345d75c976.jpg",
    atributos: {
      forca: 20,
      inteligencia: 98,
      aparencia: 80,
      humor: 70
    }}, {
    nome: "Jim Halpert",
    imagem: "https://i.pinimg.com/564x/23/d2/98/23d2987f13deada1cb73f6407e89e1c2.jpg",
    atributos: {
      forca: 40,
      inteligencia: 60,
      aparencia: 75,
      humor: 85
    }}, {
    nome: "Klaus Mikaelson",
    imagem: "https://i.pinimg.com/564x/ad/be/96/adbe966b5996a7b05d367d267349bc22.jpg",
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
  exibirCartaJogador();
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

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu 🥳🏆🥇</p>";
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu 😔😔😔</p>";
  }
  
  document.getElementById("btnJogar").disabled = "true";
  exibirCartaMaquina();
}


function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  /* 
      dentro do HTML temos a seção style que altera o CSS
      estamos passando para essa seção do HTML a imagem a ser inserida
      semelhante seria: "url(" + cartaJogador.imagem + ")"
      OBSERVAÇÃO: para a forma abaixo, usar acento grave no lugar de aspas simples
  */
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'> " + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}


function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'> " + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
