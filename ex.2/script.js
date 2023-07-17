function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')
if (fano.value.length == 0 || Number(fano.value) > ano){
   window.alert('[ERRO] Verifique os dados e tente novamente.')
} else {
    var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','bebehomem.jpg')
    if (fsex[0].checked) {
        gênero = 'Homem'
    if(idade >=0 && idade < 10){
        //Criança
        img.setAttribute('src', 'bebehomem.jpg.jpg')
    } else if (idade < 21){
        //Jovem
        img.setAttribute('src','jovemhomem.jpg.jpg')
    } else if(idade < 50){
        img.setAttribute('src','adultohomem.jpg.jpg')
        //Adulto
    } else {
        //Idoso
        img.setAttribute('src','idosohomem.jpg.jpg')
    }
    } else if(fsex[1].checked) {
        gênero = 'Mulher'
     if(idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src','bebemulher.jpg.jpg')
    } else if (idade < 21){
            //Jovem
            img.setAttribute('src','jovemmulher.jpg.jpg')
    } else if(idade < 50){
            //Adulto
            img.setAttribute('src','adultomulher.jpg.jpg')
     } else {
            //Idoso
            img.setAttribute('src','idosomulher.jpg.jpg')
     }   
    }
      res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
     res.appendChild(img)
}

}
