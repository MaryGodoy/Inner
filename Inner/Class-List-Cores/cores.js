const botao = document.getElementById('trocar-cor');
const botao2 = document.getElementById('vermelho');
const botao3 = document.getElementById('roxo');
const botao4 = document.getElementById('rosa');

botao.addEventListener('click', function trocaCor(){
    let div = document.getElementById('azul');  
    div.classList.toggle('verde')
})
botao2.addEventListener('click', function trocaCor(){
    let div = document.getElementById('azul');  
    div.classList.toggle('vermelho')
})
botao3.addEventListener('click', function trocaCor(){
    let div = document.getElementById('azul');  
    div.classList.toggle('roxo')
})
botao4.addEventListener('click', function trocaCor(){
    let div = document.getElementById('azul');  
    div.classList.toggle('rosa')
})