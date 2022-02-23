var mix = [42, true, "towel", [2,1], "hello", 34.4, {name: "juan"}] 
var valores = []


for (let i = 0; i < mix.length; i++){
    let valor = typeof mix[i]
    valores.push(valor)
}

console.log(valores)