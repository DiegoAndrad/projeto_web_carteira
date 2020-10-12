function botao(num){
  var salvo = document.calc.visor.value;
  document.calc.visor.value = salvo + num;
  console.log(document.calc.visor.value);
}