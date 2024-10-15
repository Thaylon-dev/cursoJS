function pais(){
    var local =  document.getElementById('txtpais')
    var msg= document.getElementById('msg') 

    if(local.value == 'BRASIL'){
        msg.innerText = `${local}`
        msg.innerHTML += '<p>Você é Brasileira</p>'
    }else{
        msg.innerHTML +='<p>Você é estrangeira</p>'
    }

}