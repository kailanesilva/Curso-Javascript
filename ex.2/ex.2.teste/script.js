function verificar(){
   let data = new Date()
   let ano = data.getFullYear()
   let nano = document.getElementById('txtano')
   let res = document.getElementById('res')
if(nano.value.length == 0 || Number(nano.value) > ano){
    alert('Verifque os dados e tente novamente.')
} else {
   let fsex = document.getElementsByName('radsex')
   let idade = ano - Number(nano.value)
   let gênero = ''
   let img = document.createElement('img')
   img.setAttribute('id','criancamulher2.jpg')
if(fsex[0].checked){
  gênero = 'Homem'
  if(idade >= 0 && idade <=10){
        //Criança
    img.setAttribute('src','criancahomem2.jpg')
  } else if(idade < 18){
        //Jovem
    img.setAttribute('src','jovemhomem2.jpg')
  } else if(idade < 50){
        //Adulto
    img.setAttribute('src','adultohomem2.jpg')
  } else {
        //Idoso
    img.setAttribute('src','idosohomem2.jpg')
  }
}if(fsex[1].checked){
    gênero = 'Mulher'
    if(idade == 0 && idade <= 10){
        //Criança
    img.setAttribute('src','criancamulher2.jpg')
  } else if(idade < 18){
        //Jovem
    img.setAttribute('src','jovemmulher2.jpg')
  } else if(idade < 50){
        //Adulto
    img.setAttribute('src','adultamulher2.jpg')
  } else {
        //Idoso
    img.setAttribute('src','idosamulher2.jpg')
  }
}
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
}
}
