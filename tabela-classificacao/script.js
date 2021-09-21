var players = [];

function adicionarJogador() {
  var novoNome = document.getElementById("jogador").value;
  if (novoNome != "") {
    var novoPlayer = {
      nome: novoNome,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    players.push(novoPlayer);
    exibeJogadoresNaTela(players);
    document.getElementById("jogador").value = "";
  }
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function calculaPontos(jogador) {
  return jogador.vitorias * 3 + jogador.empates;
}

for (var i = 0; i < players.length; i++) {
  players[i].pontos = calculaPontos(players[i]);
}

function adicionarVitoria(i) {
  players[i].vitorias++;
  players[i].pontos = calculaPontos(players[i]);
  for (var x = 0; x < players.length; x++) {
    if (x != i) {
      adicionarDerrota(x);
      players[x].pontos = calculaPontos(players[x]);
    }
  }
  exibeJogadoresNaTela(players);
}

function adicionarEmpate() {
  for (var x = 0; x < players.length; x++) {
    players[x].empates++;
    players[x].pontos = calculaPontos(players[x]);
  }
  exibeJogadoresNaTela(players);
}

function adicionarDerrota(i) {
  players[i].derrotas++;
  exibeJogadoresNaTela(players);
}

function finalizarPartida() {
  // APENAS NO CASO DE VENCEDOR ÚNICO
  // SE EMPATAREM O PRIMEIRO NOME DA TABELA APARECE COMO VENCEDOR
  if (players.length != 0) {
    var vencedor = 0;
    if (players.length > 1) {
      var maiorPontuacao = players[0].pontos;

      for (var x = 1; x < players.length; x++) {
        if (players[x].pontos > maiorPontuacao) {
          vencedor = x;
        }
      }
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "O vencedor da última rodada foi:\n🏆 " + players[vencedor].nome + " 🏆";
    players = [];
    exibeJogadoresNaTela(players);
  }
}
