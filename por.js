function calcularPorcentaje() {
  var cantidad = parseFloat(document.getElementById('cantidad').value);
  var porcentaje = parseFloat(document.getElementById('porcentaje').value);
  var resultado = cantidad * (porcentaje / 100);
  document.getElementById('resultado').innerText = `El ${porcentaje}% de ${cantidad} es ${resultado.toFixed(2)}`;
}
