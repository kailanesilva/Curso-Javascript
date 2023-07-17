let valores = [4,7,3,9,1,5]
valores.push(2)                 //adicionei o valor 2 no final da string
valores[3]=6                    // na posição 3 eliminei o valor 9 e adicionei o valor 6
valores.sort()                  //coloquei tudo em ordem
/*
for(let pos = 0; pos < valores.length; pos++) {
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)  //forma de mostrar na tela
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)   //forma mais simples de mostrar na tela 
}   

 //valores.indexOf(7) -> comando para procurar esse valor dentro do vetor, se encontrado, ele mostra a posição em que esse valor está
let pos = valores.indexOf(4)
   if(pos == -1) {
    console.log('O valor não foi encontrado.')
 } else {
    console.log(`O valor 4 foi encontrado na posição ${pos}.`) 
 }