let opcao= parseInt(prompt("Digite uma opçâo"))
switch(opcao){
    case 1:
        document.write("Primeira opçâo")
        break;
    case 2:
        document.write("Segunda opçâo")
        break;
    case 3:
        document.write("Terceira opçâo")
        break;
    default:
        document.write("Nenhuma das opçôes válidas")
        break;
}


// incrementando e decrementando (FOR)
document.write("<br></br>")
let valor = 7
document.write(valor)
document.write("<br></br>")
valor = valor +=4;
valor ++
document.write(valor)
document.write("<br></br>")

let valor2 = 10
document.write(valor2)
valor2 = valor2 -= 1
document.write("<br></br>")
document.write(valor2)
document.write("<br></br>")

// Usando o for
for (let i=0; i<10; i++){
    document.write("O valor é ", i)
    document.write("<br></br>")
}


// Usando o ARRAY
let carros=["GOL", "FOCUS", "LANCER", "JETTA"]
for(let i=0; i < carros.length; i++){
    document.write(carros[i])
    document.write("<br></br>")
}


