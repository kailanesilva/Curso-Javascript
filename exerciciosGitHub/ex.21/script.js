let res = document.getElementById('res')

function contar(){
    res.innerHTML += '<h2>Contando...</h2>'
    for(let c = 1; c <= 10; c++){
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += '\u{1F3C1}'
}