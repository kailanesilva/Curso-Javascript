let res = document.getElementById('res')

function calcular(){
 let nome = prompt('Qual é o nome do aluno?')
 let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
 let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de Kailane?`))
 let media = (n1 + n2) / 2

 let msg
if (media > 6) {
    msg = 'Meus parabéns!'
}else{
    msg = 'Estude um pouco mais!'
}
res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>:</p>`
res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
res.innerHTML += `<p>A média final é <mark>${media}</mark>.</p>`
res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">${msg}</strong></p>`
}