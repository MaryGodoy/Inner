let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');
let total = document.getElementById('total');

resultado.addEventListener("click", function soma() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let total = document.getElementById('total');
    total.textContent = num1 + num2;
})