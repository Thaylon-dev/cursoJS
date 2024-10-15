
//função que recebe o evento de entrar = onmouseenter
function entrou(){
    var entro = document.getElementById('quadrado')
    entro.style.background='pink'
    entro.innerText= 'Você entrou :)'
}
//função que recebe o evento de clicar = onclick
function clicar(){
    var clica = document.getElementById('quadrado')
    clica.style.background ='red'
    clica.style.color='white'
    clica.innerText ='Você clicou :|'
}
//função que recebe o evento de sair = onmouseout
function saiu(){
    var sai = document.getElementById('quadrado')
    sai.style.background = 'blue'
    sai.style.color='white'
    sai.innerText = 'você saiu :('
}