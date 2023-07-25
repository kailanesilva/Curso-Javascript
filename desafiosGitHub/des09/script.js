let res = document.getElementById('res')

function reajuste(){
    let func = prompt(`Qual é o nome do funcionário?`)
    let sal = Number(prompt(`Qual é o salário de ${func}?`))
    let porc = Number(prompt(`O salário de ${func} vai ser reajustado em qual porcentagem?`))
    let aumento = porc / 100 * sal
    let tot = sal + aumento

    res.innerHTML = `<h2>${func} recebeu um aumento salarial!</h2>`
    res.innerHTML += `O salário atual era R$${sal.toFixed(2).replace('.',',')}<br>`
    res.innerHTML += `Com um aumento de ${porc}%, o salário vai aumentar R$${aumento.toFixed(2).replace('.',',')} no próximo mês.<br>`
    res.innerHTML += `E a partir daí, ${func} vai passar a ganhar R$${tot.toFixed(2).replace('.',',')}<br>`
}