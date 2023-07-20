function comprar(){
    let produto = prompt(`Que produto você está comprando?`)
    let preco = Number(prompt(`Quando custa ${produto} que você está comprando?`))
    let valor = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    let troco = valor - preco

    alert(`Você comprou ${produto} que custou R$ ${preco},00.\nDeu R$ ${valor},00 em dinheiro e vai receber R$ ${troco},00 de troco.\nVolte sempre!`)
}