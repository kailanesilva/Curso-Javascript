let res = document.getElementById('res')

function contar(){
    res.innerHTML += '<h2>Contando os números pares...</h2>'
    let c = 1
    while(c <= 10){
        if(c % 2 == 0){
            res.innerHTML += `${c} \u{1F449}`
        }else{
            res.innerHTML += ''
        }
        c++
    }
    res.innerHTML += '\u{1F3C1}'
}