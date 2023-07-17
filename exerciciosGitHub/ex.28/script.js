let res = document.getElementById('res')

function gerar(){
    let val1 = document.getElementById('val1')
    let n = Number(val1.value)
    res.innerHTML += `<h2>Calculando ${n}!</h2>`

    let c = n
    let fat = 1
    while(c > 1){
        res.innerHTML += `${c} x `
        fat *= c
        c--
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}