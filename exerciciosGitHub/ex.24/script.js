let res = document.getElementById('res')

function contar(){
    res.innerHTML += '<h2>Contando...</h2>'
    let c = 10
    while(c >= 1){
        res.innerHTML += `${c} \u{1F449}`
        c--
    }
     res.innerHTML += '\u{1F3C1}'
}