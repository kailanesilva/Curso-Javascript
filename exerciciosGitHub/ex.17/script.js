let res = document.getElementById('res')

function gerar(){
  let min = 1
  let max = 100
  let dif = max - min
  let aleatorio = Math.random() // essa função gera um valor aleatório entre 0 e 1
  let num = min + Math.trunc(dif * aleatorio)

  res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar(){
  res.innerHTML = null //função para limpar todo o campo
}