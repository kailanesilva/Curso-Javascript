var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`)
if (hora > 4 && hora < 12) {
    console.log('Bom dia pequeno gafanhoto!')
} else if (hora > 11 && hora <= 18){
    console.log('Boa tarde pequeno gafanhoto!')
} else if (hora >= 0 && hora <= 4 ) {
        console.log ('Boa madrugada pequeno gafanhoto!')
} else {
    console.log ('Boa noite pequeno gafanhoto!')
} 
//condição aninhada
