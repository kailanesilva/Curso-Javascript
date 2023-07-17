let pessoa  = {nome:'Kailane',
sexo:'F',
peso: 64.5,
   engordar(p=0){
      console.log('Engordou!')
      this.peso += p
}}
   engordar(2)
    console.log(`${pessoa.nome} pesa ${pessoa.peso} kg.`)