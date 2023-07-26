let res = document.getElementById('res')

function verificar(){
    let preco1 = Number(prompt(`Qual era o preço anterior do produto?`))
    let preco2 = Number(prompt(`Qual é o preço atual do produto?`))
    let dif = preco2 - preco1
    let dif2
    let msg

    if(preco1 > preco2){
        msg = `barato`
    }else{
        msg = `caro`
    }

    if(dif < preco1){
        dif2 = `subiu`
    }else{
        dif2 = `caiu`
    }

    res.innerHTML = `<h2>Analisando os valores informados...</h2>`
    res.innerHTML += `<p>O produto custava R$${preco1.toFixed(2).replace('.',',')} e agora custa R$${preco2.toFixed(2).replace('.',',')}.</p>`
    res.innerHTML += `<p>Hoje o produto está mais ${msg}.</p>`
    res.innerHTML += `<p>O preço ${dif2} R$${dif.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`
}