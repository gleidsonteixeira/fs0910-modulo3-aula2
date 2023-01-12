let container = document.getElementById("container");

// let ovos = 4;
// let banana = 2;
// let soma = ovos + banana;

// container.innerHTML = soma;

// ovos = 2;
// soma = ovos + banana;

// container.innerHTML = soma;

// const MANTEIGA = "300g";
// container.innerHTML = MANTEIGA;
// MANTEIGA = "500g";
// container.innerHTML = MANTEIGA;

// let numero = "5";
// if(numero < 10 && numero == 6 || numero === 5){
//     console.log("verdadeiro")
// }else{
//     console.log("falso");
// }

function imc()
{
    event.preventDefault();
    let p = Number(peso.value);
    let a = Number(altura.value);
    let calculo = (p / (a * a)).toFixed(1);
    let resultado = document.getElementById("resultado");
    if(calculo < 18.5){
        resultado.innerHTML = "Abaixo do peso: "+calculo;
    }else if(calculo >= 18.5 && calculo <= 24.9){
        resultado.innerHTML = "Peso normal: "+calculo;
    }else if(calculo >= 25 && calculo <= 29.9){
        resultado.innerHTML = "Sobrepeso: "+calculo;
    }else if(calculo >= 30 && calculo <= 34.9){
        resultado.innerHTML = "Obesidade Grau 1: "+calculo;
    }else if(calculo >= 35 && calculo <= 39.9){
        resultado.innerHTML = "Obesidade Grau 2: "+calculo;
    }else{
        resultado.innerHTML = "Obesidade Grau 3: "+calculo;
    }

}

