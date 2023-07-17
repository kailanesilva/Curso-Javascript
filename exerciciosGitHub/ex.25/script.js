let res = document.getElementById('res')

function contar(){
    let val1 = document.getElementById('val1')
    let n = Number(val1.value)
    res.innerHTML += `<h2>Contando de 0 até ${n}</h2>`
    let c = 0
    while(c <= n){
        res.innerHTML += `${c} \u{1F449}`
        c++
    }
    res.innerHTML += '\u{1F3C1}'
}