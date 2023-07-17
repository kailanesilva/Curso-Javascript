let res = document.getElementById('res')

function contar(){
    let val1 = document.getElementById('val1')
    let val2 = document.getElementById('val2')
    let n1 = Number(val1.value)
    let n2 = Number(val2.value)
    res.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`

    if(n1 < n2){
        let c = n1
        while(c <= n2){
            res.innerHTML += `${c} \u{1F449}`
            c++
        }
        res.innerHTML += '\u{1F3C1}'
    }else if(n1 > n2){
        let c = n1
        while(c >= n2){
            res.innerHTML += `${c} \u{1F449}`
            c--
        }
        res.innerHTML += '\u{1F3C1}'
    }else{
        res.innerHTML += 'Não é possível fazer a contagem pois os números são iguais \u{1F3C1}'
    }
}