function calcular(){
   let res = document.getElementById('res')
   let agora = new Date()
   let ano = Number(prompt('Em que ano você nasceu?'))
   let ano2 = agora.getFullYear()
   let idade = ano2 - ano

   res.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${ano2}.`
}