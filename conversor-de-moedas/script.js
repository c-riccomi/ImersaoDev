function ConverterD() {
  //guarda o Id em HTML do input
  var valorElemento = document.getElementById("valorD");
  //mostra o input como string
  var valorDolar = valorElemento.value;
  //mostra o input como float
  var valorDolarNumerico = parseFloat(valorDolar);

  //mostra o input (dólar) já transformado em real
  var valorReal = valorDolarNumerico * 5;

  //id do HTML onde deverá ser guardada a resposta
  var valorConvertidoElemento = document.getElementById("valorConvertidoD");
  //resposta a ser impressa
  var valorConvertido = "O resultado em real é R$ " + valorReal + ".";
  //atribui à variável do HTML o valor que transformamos
  valorConvertidoElemento.innerHTML = valorConvertido;
}

function ConverterE() {
  var valorElemento = document.getElementById("valorE");
  var valorEuro = valorElemento.value;
  var valorEuroNumerico = parseFloat(valorEuro);

  var valorReal = valorEuroNumerico * 6;

  var valorConvertidoElemento = document.getElementById("valorConvertidoE");
  var valorConvertido = "O resultado em real é R$ " + valorReal + ".";
  valorConvertidoElemento.innerHTML = valorConvertido;
}
