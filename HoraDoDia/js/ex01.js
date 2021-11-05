function loading() {
    var body = window.document.getElementById('body')
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10){
        msg.innerHTML = `Agora são ${hora}:0${minuto}.`
    }
    else{
        msg.innerHTML = `Agora são ${hora}:${minuto}.`
    }

    if (hora >= 0 && hora <= 12){
        foto.style.backgroundImage = "url('images/manha.jpg')"
        body.style.backgroundColor = '#ffdcbd'
    }
    else if (hora > 12 && hora <= 18){
        foto.style.backgroundImage = "url('images/tarde2.jpg')"
        body.style.backgroundColor = '#ff7038'
    }
    else{
        foto.style.backgroundImage = "url('images/noite2.jpg')"
        body.style.backgroundColor = '#1f1957'
    }
}
