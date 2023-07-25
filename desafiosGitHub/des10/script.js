let res = document.getElementById('res')

function calcular(){
    let a = Number(prompt(`Qual é o valor de a?`))
    let b = Number(prompt(`Qual é o valor de b?`))
    let c = Number(prompt(`Qual é o valor de c?`))
    let resul = b * b - 4 * a * c

    res.innerHTML = `<h2>Calculando...</h2>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>&Delta; = ${resul}</strong></mark></p>`
}