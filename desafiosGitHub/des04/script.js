function comprar(){
    let produto = prompt(`Que produto você está comprando?`)
    let preco = Number(prompt(`Quando custa ${produto} que você está comprando?`))
    let valor = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    let troco = valor - preco

    alert(`Você comprou ${produto} que custou R$ ${preco.toFixed(2).replace('.',',')}.\nDeu R$ ${valor.toFixed(2).replace('.',',')} em dinheiro e vai receber R$ ${troco.toFixed(2).replace('.',',')} de troco.\nVolte sempre!`)
}