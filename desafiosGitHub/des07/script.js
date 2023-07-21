let dolar = Number(prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`))
let res = document.getElementById('res')

   function converter(){
      let real = Number(prompt(`Quantos R$ você tem na carteira?`))
      let compra = real / dolar 

      res.innerHTML = `<h2>Com R$${real}...</h2>`
      res.innerHTML += `<p>Você consegue comprar aproximadamente ${compra} dólares.`
}