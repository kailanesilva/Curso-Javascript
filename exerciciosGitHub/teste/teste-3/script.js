function verificar(){
    let num = document.getElementById('num1')
    let res = document.getElementById('res')

    if(num.value.length <= 0){
        alert('Digite um número válido e tente novamente.')
    }else{
        let vel = Number(num.value)
        if(vel <= 60){
            res.innerHTML = `<p>Sua velocidade é de ${vel} km/h.</p>`
            res.innerHTML += '<p>Não possui multas.</p>'
            res.style.color = 'green'
        }else{
            res.innerHTML = `<p>Sua velocidade é de ${vel} km/h.`
            res.innerHTML += '<p>Você ultrapassou o limite de velocidade, portanto foi MULTADO!</p>'
            res.style.color = 'red'
        }
    }
}