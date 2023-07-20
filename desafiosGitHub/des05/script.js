let res = document.getElementById('res')

function converter(){
    let m = Number(prompt(`Digite uma distância em metros (m)`))
    let km = m / 1000
    let hm = m / 100
    let dam = m / 10
    let dm = m * 10
    let cm = m * 100
    let mm = m * 1000
    res.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`

    res.innerHTML += `<p>${km} quilômetros <mark>(km)</mark></p>`
    res.innerHTML += `<p>${hm} hectômetros <mark>(hm)</mark></p>`
    res.innerHTML += `<p>${dam} decâmetros <mark>(dam)</mark></p>`
    res.innerHTML += `<p>${dm} decímetros <mark>(dm)</mark></p>`
    res.innerHTML += `<p>${cm} centímetros <mark>(cm)</mark></p>`
    res.innerHTML += `<p>${mm} milímetros <mark>(mm)</mark></p>`
}