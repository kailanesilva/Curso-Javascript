let res = document.getElementById('res')
function analisar(){
  let agora = new Date()
  let data = agora.getDate()
  let mes = agora.getMonth()
  let ano = agora.getFullYear()
  let dias = agora.getDay()
  let hora = agora.getHours()
  let min = agora.getMinutes()
  let seg = agora.getSeconds()

  res.innerHTML = `<p>Dia: <mark>${data}</mark></p>`
  res.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
  res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
  res.innerHTML += `<p>Dia da semana: <mark>${dias}</mark></p>`
  res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
  res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
  res.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}