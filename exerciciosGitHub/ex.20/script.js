let res = document.getElementById('res')

function verificar(){
    let mes = prompt('Digite o mês em extenso (ex: Setembro)')
    let estacao
    switch(mes){
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'INVERNO'
            break
        case 'abril': case 'maio': case 'junho':
            estacao = 'PRIMAVERA'
            break
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'VERÃO'
            break
        case 'outubro': case 'novembro': case 'dezembro':
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.`
}