let res = document.getElementById('res')

function verificar(){
    let ano = Number(prompt(`Qual é o ano que você quer verificar?`))
    let msg

    if(ano % 4 == 0 && ano % 100 != 0){
        msg = `É BISSEXTO \u{2705}`
    }else if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
        msg = `É BISSEXTO \u{2705}`
    }else{
        msg = `NÃO É BISSEXTO \u{274C}`
    }

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    res.innerHTML += `<p>O ano de ${ano} <strong>${msg}</strong></p>`
}