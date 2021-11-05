function clicar(){
    var wrap = window.document.getElementById('wraper')
    var res = window.document.getElementById('res')
    var foto = window.document.getElementById('foto')
    var masc = window.document.getElementById('masc').checked
    var fem = window.document.getElementById('fem').checked
    var ano = parseInt(document.getElementById('ano').value)
    var agora = new Date()
    var hoje = agora.getUTCFullYear()
    var idade = hoje - ano
    wrap.style.height = "350px"
    foto.style.display = 'block'
    if (idade <= -1 || ano > hoje || ano == 0){
        window.alert('[Error] Verifique se os dados estão corretos e tente novamente.')
    }
    else if (idade < 18 && masc == true){
        res.innerHTML = `É um homem de ${idade} anos`
        foto.style.backgroundImage = "url('images/crianca-menino.jpg')"
    }
    else if (idade < 18 && fem == true){
        res.innerHTML = `É uma mulher de ${idade} anos`
        foto.style.backgroundImage = "url('images/crianca-menina.jpg')"
    }
    else if (idade > 18 && idade <= 25 && masc == true){
        res.innerHTML = `É um homem de ${idade} anos`
        foto.style.backgroundImage = "url('images/jovem-homem.jpg')"
    }
    else if (idade > 18 && idade <= 25 && fem == true){
        res.innerHTML = `É uma mulher de ${idade} anos`
        foto.style.backgroundImage = "url('images/jovem-mulher.jpg')"
    }
    else if (idade > 25 && idade <= 60 && masc == true){
        res.innerHTML = `É um homem de ${idade} anos`
        foto.style.backgroundImage = "url('images/adulto-homem.jpg')"
    }
    else if (idade > 25 && idade <= 60 && fem == true){
        res.innerHTML = `É uma mulher de ${idade} anos`
        foto.style.backgroundImage = "url('images/adulto-mulher.jpg')"
    }
    else if (idade > 60 && masc == true){
        res.innerHTML = `É um homem de ${idade} anos`
        foto.style.backgroundImage = "url('images/idoso-homem.jpg')"
    }
    else if (idade > 18 && fem == true){
        res.innerHTML = `É uma mulher de ${idade} anos`
        foto.style.backgroundImage = "url('images/idoso-mulher.jpg')"
    }
}
