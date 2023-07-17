function contar(){
 let ini = document.getElementById('num1')
 let fim = document.getElementById('num2')
 let passo = document.getElementById('num3')
 let res = document.getElementById('res')
   
   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      alert('Verifique os dados e tente novamente!')
   } else {
    res.innerHTML = 'Contando:'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number (passo.value)

    if (p <= 0){
        alert('Número inválido, considerando PASSO 1')
        p = 1
    }
      if(i <= f){
        for(let c = i; c <= f; c += p){
           res.innerHTML += `${c} \u{1F4A0}` 
      }
    } else {
        for (let c = i; c >= f; c -= p){
           res.innerHTML += `${c} \u{1F4A0}`
        }
    
    }

   }
}