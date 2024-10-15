function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var msg = document.getElementById('msg')

    if ( fano.value.length == 0 || fano.value>ano ){
        alert('[ERRO] Verifique os dados e tente novamente')

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value )
        var genero = '';
        var imgs = document.getElementById('imgs')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 &&  idade < 10){
                msg.innerHTML = `<p>Você é um menino de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/crianca-m.jpg"
            }else if(idade < 21){
                msg.innerHTML = `<p>Você é um jovem de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/jovem-m.jpg"
            }else if (idade < 50){
                msg.innerHTML = `<p>Você é um adulto de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/adulto-m.jpg"
            }else{
                msg.innerHTML = `<p>Você é um idoso de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/idoso-m.jpg"
            }
        }else{
            if(idade >=0 &&  idade < 10){
                msg.innerHTML = `<p>Você é uma menina de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/crianca-f.jpg"
            }else if(idade < 21){
                msg.innerHTML = `<p>Você é uma jovem de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/jovem-f.jpg"
            }else if (idade < 50){
                msg.innerHTML = `<p>Você é uma adulta de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/adulto-f.jpg"
            }else{
                msg.innerHTML = `<p>Você é uma idosa de <strong>${idade}</strong> anos</p>`
                imgs.src="imagens/idosa-m.jpg"
            }

        }

    }
    
}