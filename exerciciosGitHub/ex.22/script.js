let res = document.getElementById('res')

function contar(){
    res.innerHTML += '<h2>Contando...</h2>'
    let c = 1
    while(c <= 10){
        if(c % 2 == 0){
            res.innerHTML += `<strong><mark>${c}</mark></strong> \u{1F449}`
        }else{
            res.innerHTML += `${c} \u{1F449}`
        }
        c++
    }
    res.innerHTML += '\u{1F3C1}'
}