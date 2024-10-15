
//meu programa antes do prof guanabara
/*
function calcular(){
    var velocidade = document.getElementById('txtvel')
    var vel = Number(velocidade.value)
    var msg = document.getElementById('mensagem')

    if (vel > 76){

        msg.innerText= `A velocidade de ${vel} Km/h é maior do que 76 Km/h `
        
    }else{
        msg.innerText = `A velocidade de ${vel} Km/h é aceita , dirija com segurança`
    }
};
*/
function calcular(){
    var txtv = document.getElementById('txtvel')
    var msg = document.getElementById('mensagem')
    var vel = Number(txtv.value) 
    msg.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong> </p>`
   
    if  (vel > 60 ){
    msg.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade  </p>`
            
    };
    msg.innerHTML +=`<p>Dirija sempre com o cinto de segurança</p>`
}