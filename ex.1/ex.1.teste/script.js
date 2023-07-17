function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let msg = document.getElementById('msg')
    let res = document.getElementById('res')
    let img = document.getElementById('imagem')
    msg.innerHTML = `Olá, são exatamente ${hora} horas.`
    if(hora == 5 || hora <= 11){
        img.src = "girassol.jpg"
        res.innerHTML = 'Girassóis para animar seu dia!'
        document.body.style.background ='#FFFF00'
    } else if (hora == 12 || hora <= 17){
        img.src = "tulipa.jpg"
        res.innerHTML = 'Tulipas para animar sua tarde!'
        document.body.style.background ='#FF8C00'
    } else{
        img.src = "rosavermelha.jpg"
        res.innerHTML = 'Rosa vermelha para animar sua noite!'
        document.body.style.background ='#8B0000'
    }

} 


    