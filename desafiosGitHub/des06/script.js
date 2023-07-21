let res = document.getElementById('res')

function converter(){
    let c = Number(prompt(`Digite uma temperatura em °C (Celsius)`))
    let k = c + 273.15
    let f = c * 1.8000 + 32.00
    res.innerHTML = `<h2>A temperatura de ${c}°C, corresponde a...`

    res.innerHTML += `<p>${k}°K <mark>(Kelvin)</mark></p>`
    res.innerHTML += `<p>${f}°F <mark>(Fahrenheit)</mark></p>`
}