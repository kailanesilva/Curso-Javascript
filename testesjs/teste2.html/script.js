function contar(){
    let ini = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('num3')
    let res = document.getElementById('res')

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Digite um número válido e tente novamente.')
} else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    if(p <= 0){
            alert('Passo inválido. Considerando PASSO 1.')
       p = 1
    }
    if(i <= f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F49A}`
        }
    }
    else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F49A}`
        }
    }
    }
     res.innerHTML += '\u{2705}'
     }
    
