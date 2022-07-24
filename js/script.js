console.log("Ola mundao")

var inputSalario = document.querySelector("#ganho-mes");
console.log(inputSalario);

var inputHora = document.querySelector("#horas-dia");
console.log(inputHora);

var resultado = document.querySelector("span")

function calcularValorHora(){
    var salario = inputSalario.valueAsNumber
   
    var horas = inputHora.valueAsNumber

    var horasMes = horas * 22

    var valorHora = salario/horasMes

    var valorDuasCasas = valorHora.toFixed(2)

    console.log(valorDuasCasas)
    console.log(resultado)

    resultado.textContent = "R$ " + valorDuasCasas

    
}
