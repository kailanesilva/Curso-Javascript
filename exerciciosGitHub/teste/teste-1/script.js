function tabuada(){
    let res = document.getElementById('res')
    let num1 = document.getElementById('num1')
    let n1 = Number(num1.value)

    res.innerHTML = `<h2>Tabuada de ${n1}</h2>`

    for(let c = 1; c <= 10; c++ ){
        res.innerHTML += `${n1} x ${c} = <strong>${n1*c}</strong><br>`
    }
}