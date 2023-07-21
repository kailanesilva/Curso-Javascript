let res = document.getElementById('res')

function calcular(){
    let produto = prompt(`Qual é o produto que você está comprando?`)
    let preco = Number(prompt(`Qual é o preço do(a) ${produto}?`))
    let desconto = 10 / 100 * preco
    let final = preco - desconto

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}:</h2>`

    res.innerHTML += `<p>O preço original era R$ ${preco}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${desconto.toFixed(2)} (-10%)</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${final.toFixed(2)} no produto ${produto}.</p>`
}