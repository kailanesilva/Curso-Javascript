function tabuada(){
 let num = document.getElementById('num1')
 let tab = document.getElementById('seltab')
  
   if(num.value.length == 0){
    alert('Digite um número e tente novamente.')
  } else{
  let n = Number(num.value)
  let c = 1
  tab.innerHTML = ''

   while(c <= 10){
  let item = document.createElement('option')
  item.text = `${c} + ${n} = ${c + n}`
  tab.appendChild(item)
  c++
   }
  }
}