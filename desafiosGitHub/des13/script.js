let res = document.getElementById('res')

function verificar(){
    let nome = prompt(`Qual é o nome do(a) aluno(a)?`)
    let n1 = Number(prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(prompt(`Segunda nota de ${nome}:`))
    let media = (n1 + n2) / 2
    let msg

    if(media >= 6){
        msg = `<p>Com a média acima de 6,0 o aluno está <strong style= 'background:green';>APROVADO</strong></p>`
    }else if(media >= 3 && media < 6){
        msg = `<p>Com a média entre 3,0 e 6,0, o aluno está em <strong style= 'background:orange';>RECUPERAÇÃO</strong></p>`
    }else{
         msg = `<p>Com a média abaixo de 3,0, o aluno está <strong style= 'background:red';>REPROVADO</strong></p>`
    }

    res.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`
    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
    res.innerHTML += `<p>${msg}</p>`
}