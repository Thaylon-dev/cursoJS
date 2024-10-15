function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');  
    var horário = new Date();
    var hora = horário.getHours();


    if(hora <= 12 && hora > 3){
        msg.innerHTML = `<p>Agora são ${hora} horas , Bom Dia ! </p>`
        img.src="imagens/manha.jpg"
        document.body.style.background = '#faaf01'
    }else if( hora < 18 && hora  >  12){
        msg.innerHTML = `<p>Agora são ${hora} horas , Boa Tarde ! </p>`
        img.src="imagens/tarde.jpg"
        document.body.style.background = '#fbc367'
    }else {
        msg.innerHTML = `<p>Agora são ${hora} horas , Boa Noite ! </p>`
        img.src="imagens/noite.jpg"
        document.body.style.background = '#624873'
    }
}