function carregar(){
    var msg = document.getElementById('msg')
    var imgs = document.getElementById('imgs')
    var hr = new Date()
    var hora = hr.getHours();

    if (hora >= 5 && hora <= 12){
        msg.innerHTML = `<p>Agora são ${hora} horas , Bom dia!</p>`
        imgs.src="imagens/manha.jpg"
    }else if (hora > 12 &&  hora < 18 ){
        msg.innerHTML = `<p>Agora são ${hora} horas , Boa Tarde!</p>`
        imgs.src="imagens/tarde.jpg"
    }else{
        msg.innerHTML = `<p>Agora são ${hora} horas , Boa Noite!</p>`
        imgs.src="imagens/noite.jpg"
    }
}